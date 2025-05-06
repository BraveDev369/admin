import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

import Footer from "./general/Footer";
import Header from "./general/Header";
import Sidebar from "./general/Sidebar";
import Providers from "./provider";
import Routing from "../Routing";
import { useTheme } from "./provider/AntD";
export default function App() {
  const { isDark } = useTheme();

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <Header />
        <Content className="p-2">
          <Routing />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
}
