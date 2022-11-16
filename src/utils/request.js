import axios from "axios";
import getToken from "./getToken";
import { Message } from "@arco-design/web-react";

// const BASEURL = String(import.meta.env.VITE_APP_API1);
// const BASEURL = "http://pv.sohu.com/";

const service = axios.create({
  // baseURL: BASEURL,
  // 请求超时时间
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    //判断code码
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
