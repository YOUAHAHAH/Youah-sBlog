import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router";
import "@arco-design/web-react/dist/css/arco.css";
import "./assets/style/theme.less";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <Provider store={store}>
  <Router />
  // </Provider>
);
