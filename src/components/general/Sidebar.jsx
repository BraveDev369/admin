import { Layout, Menu } from "antd";
import React from "react";

const { Sider: AntSider } = Layout;

import {
  DashboardOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};

const items = [
  {
    key: "dashboard",
    icon: <DashboardOutlined />,
    label: <Link to="/">داشبورد</Link>,
  },
  {
    key: "peaple",
    label: "کاربران",
    icon: <UserOutlined />,
    children: [
      { key: "peaple-5", label: <Link to="/people">لیست کاربران</Link> },
      { key: "peaple-6", label: <Link to="/people/add">افزودن</Link> },
    ],
  },
  {
    key: "posts",
    label: "مقالات",
    icon: <EditOutlined />,
    children: [
      { key: "post-list", label: <Link to="/posts">لیست مقالات</Link> },
      { key: "add-post", label: <Link to="/posts/add">افزودن</Link> },
    ],
  },
];
export default function Sidebar() {
  return (
    <AntSider
      style={siderStyle}
      width="265px"
      collapsible
      theme="light"
      defaultCollapsed={true}
    >
      <Menu defaultSelectedKeys={["dashboard"]} mode="inline" items={items} />
    </AntSider>
  );
}
