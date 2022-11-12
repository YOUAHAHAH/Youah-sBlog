import React from "react";
import ReactDOM from "react-dom/client"; // 路由
import Router from "./router";
import store from "./store/index"; // 状态管理
import { Provider } from "react-redux";
import "./assets/style/theme.less";
import "./assets/style/basc.less";
import "@arco-design/web-react/dist/css/arco.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
