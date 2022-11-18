import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Outlet } from "react-router-dom";
import { Layout, BackTop } from "@arco-design/web-react";
import Header from "./Header";
import Footer from "./Footer";
import bg from "../assets/img/bg.jpg";
import h from "./index.module.less";

const Content = Layout.Content;

const index = (props) => {
  const [getOpacity, setGetOpacity] = useState("0.9");
  // const [fixedHeader, setFixedHeader] = useState(null);

  const sectionStyle = {
    backgroundImage: `url(${bg})`,
    opacity: getOpacity,
  };

  useEffect(() => {
    props.theme === "true" ? setGetOpacity("0.9") : setGetOpacity("0.2");
    // props.header === "true" ? setFixedHeader(false) : setFixedHeader(true);
  }, [
    props.theme,
    // , props.header
  ]);

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <div style={sectionStyle} className={h.img}></div>
      <BackTop
        visibleHeight={30}
        style={{ position: "absolute" }}
        target={() => document.getElementById("custom_backtop0")}
      />
      {/* {fixedHeader ? (
        <> */}
      <Header />
      <Content className={h.layOutContent} id="custom_backtop0">
        <Outlet />
        <Footer />
      </Content>
      {/* </>
      ) : (
        <>
          <Content
            className={h.layOutContent}
            style={{ paddingTop: "0" }}
            id="custom_backtop0"
          >
            <Header />
            <Outlet />
            <Footer />
          </Content>
        </>
      )} */}
    </Layout>
  );
};

export default connect(
  (state) => ({ theme: state.Disposition, header: state.Setting }),
  {}
)(index);
