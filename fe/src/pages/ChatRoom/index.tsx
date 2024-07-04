import React, { useEffect, useState } from "react";
import { Input, Button, Layout, List, Avatar, Typography, Modal } from "antd";
import "./index.less";
import { useChatSocket } from "@/hooks/useChatSocket";
import { useLocation } from "umi";
import { addTopic, getTopics, Topic } from "@/services/topic";

const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

const ChatRoom: React.FC = () => {
  const location = useLocation();
  let { name }: any = location.state || {}; // 获取页面 A 传递过来的 name 数据

  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [newRoom, setNewRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [visible, setVisible] = useState<boolean>(false); // 控制弹窗显示隐藏

  const { messages, setMessages, joinRoom, leaveRoom, sendMessage } =
    useChatSocket(name || "");

  useEffect(() => {
    fetchTopics();
  }, []);

  const fetchTopics = async () => {
    try {
      const res: any = await getTopics();
      console.log("res", res);
      setTopics(res);
      console.log("话题列表:", topics);
    } catch (error) {
      console.error("获取话题列表失败:", error);
    }
  };

  const handleJoinRoom = (roomToJoin: string) => {
    joinRoom(roomToJoin);
    setRoom(roomToJoin);
    setJoined(true);
    setNewRoom("");
  };

  const handleLeaveRoom = () => {
    setMessages([]);
    leaveRoom(room);
    setJoined(false);
    setRoom("");
  };

  const handleSendMessage = () => {
    sendMessage(message, room);
    setMessage("");
  };

  // 确认添加话题
  const handleOk = async () => {
    setVisible(false); // 关闭弹窗
    let res = await addTopic(newRoom);
    console.log("res", res);
    await fetchTopics();
  };

  // 取消添加话题
  const handleCancel = () => {
    setNewRoom(""); // 清空输入框
    setVisible(false); // 关闭弹窗
  };

  return (
    <Layout className="chatroom">
      <Sider className="chatroom__sidebar" theme="light">
        <Avatar size={64} className="chatroom__sidebar-avatar">
          {name?.[0] || ""}
        </Avatar>
        <div className="chatroom__sidebar-title">老李的聊天室</div>
        <Input
          placeholder="名称"
          value={name}
          disabled={true}
          className="chatroom__sidebar-input"
        />
        {!joined && (
          <>
            <List
              className="chatroom__sidebar-list"
              dataSource={topics}
              renderItem={(item) => (
                <List.Item
                  key={item.id}
                  onClick={() => handleJoinRoom(item.title)}
                >
                  {item.title}
                </List.Item>
              )}
            />

            <Button
              type="primary"
              onClick={() => {
                setNewRoom(""); // 清空输入框
                setVisible(true); // 关闭弹窗
              }}
              block
              className="chatroom__sidebar-button"
            >
              添加话题
            </Button>
          </>
        )}
        {joined && (
          <Button
            type="primary"
            onClick={handleLeaveRoom}
            block
            danger
            className="chatroom__sidebar-button"
          >
            离开房间
          </Button>
        )}
      </Sider>
      <Layout className="chatroom__content">
        <Header className="chatroom__header">
          {room ? room : "全局聊天室"}
        </Header>
        <Content className="chatroom__messages">
          <List
            dataSource={messages}
            bordered
            renderItem={(item) => {
              return item?.[0] !== "<" ? (
                <>
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          className={`chatroom__messages--avatar ${
                            item?.split(":")?.[0] === name
                              ? "chatroom__messages--me"
                              : ""
                          }`}
                        >
                          {item?.[0]}
                        </Avatar>
                      }
                      title={
                        item?.split(":")?.[0] === name
                          ? "我"
                          : item?.split(":")?.[0]
                      }
                      description={item?.split(":")?.[1]}
                    />
                  </List.Item>
                </>
              ) : (
                <List.Item>{item}</List.Item>
              );
            }}
          />
        </Content>
        <div className="chatroom__input">
          <TextArea
            rows={2}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="在此输入您的消息..."
          />
          <Button
            type="primary"
            onClick={handleSendMessage}
            disabled={!message?.length}
          >
            发送
          </Button>
        </div>
      </Layout>
      <Modal
        title="添加话题"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input
          placeholder="请输入话题名称"
          value={newRoom}
          onChange={(e) => setNewRoom(e.target.value)}
        />
      </Modal>
    </Layout>
  );
};

export default ChatRoom;
