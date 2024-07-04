import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "@/pages/index" },
    { path: "/chat", component: "@/pages/ChatRoom" },
  ],
});
