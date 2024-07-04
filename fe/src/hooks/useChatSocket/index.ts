import { useState, useEffect } from "react";
import { io } from "socket.io-client";

interface Message {
  msg: string;
  name: string;
}

const socket = io("http://127.0.0.1:5000/chat");

export const useChatSocket = (name: string) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("已连接到服务器");
    });

    socket.on("status", (data: Message) => {
      console.log(" status data", data);
      setMessages((prevMessages) => [...prevMessages, `<${data.msg}>`]);
    });

    socket.on("message", (data: Message) => {
      console.log("data", data);
      setMessages((prevMessages) => [...prevMessages, data.msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const joinRoom = (room: string) => {
    socket.emit("joined", { msg: room, name });
  };

  const leaveRoom = (room: string) => {
    socket.emit("left", { msg: room, name });
  };

  const sendMessage = (message: string, room: string) => {
    socket.emit("text", { msg: message, room: room, name });
  };

  return {
    messages,
    setMessages,
    joinRoom,
    leaveRoom,
    sendMessage,
  };
};
