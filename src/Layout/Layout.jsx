import React from "react";
import { Layout } from "@arco-design/web-react";

import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

export default function index() {
  return (
    <div className="layout-basic-demo">
      <Layout style={{ height: "400px" }}>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}
