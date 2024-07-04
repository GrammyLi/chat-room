import api from "./api";

export interface Topic {
  title: string;
  id: number;
}
// 获取所有话题列表
export const getTopics = async () => {
  try {
    const response = await api.get("/topics");
    return response;
  } catch (error) {
    throw error;
  }
};

// 添加新话题
export const addTopic = async (title: string) => {
  try {
    const response = await api.post("/add_topic", { title });
    return response;
  } catch (error) {
    throw error;
  }
};
