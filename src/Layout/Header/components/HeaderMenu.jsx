import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "@arco-design/web-react";
import {
  IconHome,
  IconTags,
  IconLink,
  IconEdit,
} from "@arco-design/web-react/icon";
import h from "../../index.module.less";

const MenuItem = Menu.Item;

const MenuList = [
  {
    title: "首页",
    key: "/Home",
    icon: <IconHome />,
  },
  {
    title: "分类",
    key: "/Classify",
    icon: <IconTags />,
  },
  {
    title: "友链",
    key: "/Link",
    icon: <IconLink />,
  },
  {
    title: "写博客",
    key: "/Blogging",
    icon: <IconEdit />,
  },
];

export default function HeaderMenu() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onClickMenuItem = (key) => {
    navigate(key);
  };

  return (
    <div className={h.menuDemo}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={pathname}
        onClickMenuItem={onClickMenuItem}
      >
        {MenuList.map((item) => {
          return (
            <MenuItem key={item.key} _key={item.key}>
              {item.icon} {item.title}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
