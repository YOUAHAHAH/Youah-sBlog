/**
 *  公共路由
 *
 *  */

import Home from "../pages/Home/Home";
import Classify from "../pages/Classify/Classify";
import Link from "../pages/Link/Link";
import Blogging from "../pages/Blogging/Blogging";

let routers = [
  {
    title: "首页",
    path: "/Home",
    component: Home,
  },
  {
    title: "分类",
    path: "/Classify",
    component: Classify,
  },
  {
    title: "友链",
    path: "/Link",
    component: Link,
  },
  {
    title: "写博客",
    path: "/Blogging",
    component: Blogging,
  },
];

export default routers;
