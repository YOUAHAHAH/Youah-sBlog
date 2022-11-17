/**
 *  公共路由
 *
 *  */

import Home from "../pages/Home/Home";
import Classify from "../pages/Classify/Classify";
import Link from "../pages/Link/Link";

let routers = [
  {
    title: "首页",
    path: "/Home",
    component: Home,
  },
  {
    title: "时间轴",
    path: "/Classify",
    component: Classify,
  },
  {
    title: "友链",
    path: "/Link",
    component: Link,
  },
];

export default routers;
