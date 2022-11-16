import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout } from "@arco-design/web-react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/img/bg.jpg";
import h from "./index.module.less";

const Content = Layout.Content;

const index = (props) => {
  const [getOpacity, setGetOpacity] = useState("0.9");

  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    opacity: getOpacity,
  };

  useEffect(() => {
    props.theme === "true" ? setGetOpacity("0.9") : setGetOpacity("0.2");
  }, [props.theme]);

  return (
    <>
      <Layout style={{ height: "100vh", width: "100vw" }}>
        <div style={sectionStyle} className={h.img}></div>
        <Header />
        <Content className={h.layOutContent}>
          <Outlet />
          <Footer />
        </Content>
      </Layout>
    </>
  );
};

export default connect((state) => ({ theme: state.Disposition }), {})(index);
