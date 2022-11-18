import React from "react";
import ReactDOM from "react-dom/client"; // 路由
import Router from "./router";
import store from "./store/index"; // 状态管理
import { Provider } from "react-redux";
import "./assets/style/theme.less";
import "./assets/style/basc.less";
import "@arco-design/web-react/dist/css/arco.css";
import "default-passive-events"; // Chrome 增加了新的事件捕获机制－Passive Event Listeners；

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
