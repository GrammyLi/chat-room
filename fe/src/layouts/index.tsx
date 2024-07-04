import React, { useState, useEffect } from "react";
import { Link, Outlet } from "umi";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "./index.less";

const Layout: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="navs">
        <Outlet />
      </div>
    </ConfigProvider>
  );
};

export default Layout;
