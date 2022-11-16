import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createLogin, createRegister } from "../../store/actions/Login.js";
import { Card, Typography, Tabs } from "@arco-design/web-react";
import Login from "./Components/Login.jsx";
import Res from "./Components/Res.jsx";
import l from "./Login.module.less";

const TabPane = Tabs.TabPane;

const Index = (props) => {
  const changeTabs = (key) => {
    if (key === "login") {
      props.LoginBtn(0);
    } else if (key === "res") {
      props.RegisterBtn(1);
    }
  };

  useEffect(() => {
    document.title = props.LoginState === 0 ? "登录" : "注册";
  }, [props.LoginState]);

  return (
    <div className={l.login}>
      <Card className={l.loginCard} bordered={false}>
        <Typography style={{ padding: "20px 20px 0 20px" }}>
          <Tabs
            type="line"
            onChange={changeTabs}
            defaultActiveTab={props.LoginState === 0 ? "login" : "res"}
          >
            <TabPane key="login" title="登录">
              <Login />
            </TabPane>
            <TabPane key="res" title="注册">
              <Res />
            </TabPane>
          </Tabs>
        </Typography>
      </Card>
    </div>
  );
};

export default connect((state) => ({ LoginState: state.LoginState }), {
  LoginBtn: createLogin,
  RegisterBtn: createRegister,
})(Index);
