import axios from "axios";
import { message } from "antd";

const api = axios.create({
  baseURL: "http://127.0.0.1:5000", // 后端服务器的基础URL
  timeout: 10000, // 请求超时时间
});

// 请求拦截器
api.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证token等
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器
api.interceptors.response.use(
  (response) => {
    // 如果响应状态码不是200，给出提示
    if (response.status !== 200) {
      message.error(response.data.msg || "请求失败");
      return Promise.reject(new Error(response.data.msg || "请求失败"));
    }
    return response.data;
  },
  (error) => {
    message.error(error.response?.data?.msg || "请求失败");
    return Promise.reject(error);
  }
);

export default api;
