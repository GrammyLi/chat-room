import React, { useState } from "react";
import { Input, Button, Layout, Typography, message } from "antd";
import { history } from "umi";
import { postName } from "@/services/user";

const { Content } = Layout;
const { Title } = Typography;

const IndexPage: React.FC = () => {
  const [name, setName] = useState("");

  const enterChat = async () => {
    if (!name) {
      message.error("请输入名称");
      return;
    }
    history.push("/chat", { name });
  };

  return (
    <Layout
      style={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Content style={{ textAlign: "center" }}>
        <Title level={2}>输入您的名称以加入聊天室</Title>
        <Input
          placeholder="名称"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px", marginBottom: "16px" }}
        />
        <Button type="primary" onClick={enterChat}>
          进入聊天室
        </Button>
      </Content>
    </Layout>
  );
};

export default IndexPage;
