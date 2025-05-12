import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

import Routing from "../Routing";
import Footer from "./general/Footer";
import Header from "./general/Header";
import Sidebar from "./general/Sidebar";
export default function App() {

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
