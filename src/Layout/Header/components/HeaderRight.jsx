import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createDarkTheme,
  createLightTheme,
} from "../../../store/actions/Disposition.js";
import { createLogin, createRegister } from "../../../store/actions/Login.js";
import { Button, Tooltip } from "@arco-design/web-react";
import {
  IconSunFill,
  IconMoonFill,
  IconFullscreen,
  IconFullscreenExit,
  IconSearch,
} from "@arco-design/web-react/icon";
import h from "../../index.module.less";

// 用户是否是第一次进入
const themeState =
  localStorage.getItem("BlogTheme") === null
    ? "true"
    : localStorage.getItem("BlogTheme");

const HeaderRight = (props) => {
  const navigate = useNavigate();
  const [full, setFull] = useState(false); // 全屏
  const [themeStatus, setThemeStatus] = useState(() => {
    return themeState === "true" ? true : false;
  }); // 主题

  // 设置全屏和退出全屏
  const handleFullScreen = () => {
    let element = document.documentElement;
    if (full) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    } else {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.msRequestFullscreen) {
        // IE11
        element.msRequestFullscreen();
      }
    }
    setFull(!full);
  };
  // 判断浏览器是否处于全屏状态
  const checkFull = () => {
    //  考虑兼容问题
    let isFull =
      document.mozFullScreen ||
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.webkitRequestFullScreen ||
      document.mozRequestFullScreen ||
      document.msFullscreenEnabled;
    if (isFull === undefined) {
      // isFull === undefined 时处于全屏
      isFull = false;
    }
    return isFull;
  };

  // 设置为暗黑主题
  const getThemeLight = () => {
    setThemeStatus(!themeStatus);
    document.body.removeAttribute("arco-theme");
    props.DarkTheme("true");
    localStorage.setItem("BlogTheme", "true");
  };

  // 恢复亮色主题
  const getThemeDark = () => {
    setThemeStatus(!themeStatus);
    document.body.setAttribute("arco-theme", "dark");
    props.LightTheme("false");
    localStorage.setItem("BlogTheme", "false");
  };

  // 登录
  const handleLogin = () => {
    navigate("/Login", { state: { id: 0 } });
    props.LoginBtn(0);
  };

  // 注册
  const handleRes = () => {
    navigate("/Login", { state: { id: 1 } });
    props.RegisterBtn(1);
  };

  useEffect(() => {
    window.onresize = function () {
      if (!checkFull()) {
        // 退出全屏后要执行的动作
        setFull(false);
      }
    };

    // 判断默认主题
    if (themeState === "true") {
      getThemeLight();
    } else {
      getThemeDark();
    }
  }, []);

  return (
    <div className={h.btnGroup}>
      {/* 搜索 */}
      <Tooltip
        position="bottom"
        trigger="hover"
        mini
        color={"#4E5969"}
        content="搜索"
      >
        <Button type="text" icon={<IconSearch />} />
      </Tooltip>

      {/* 全屏切换 */}
      <Tooltip
        position="bottom"
        trigger="hover"
        mini
        color={"#4E5969"}
        content={full ? "退出全屏" : "全屏"}
      >
        {full ? (
          <Button
            type="text"
            icon={<IconFullscreenExit />}
            onClick={handleFullScreen}
          />
        ) : (
          <Button
            type="text"
            icon={<IconFullscreen />}
            onClick={handleFullScreen}
          />
        )}
      </Tooltip>

      {/* 主题颜色切换 */}
      <Tooltip
        position="bottom"
        trigger="hover"
        mini
        color={"#4E5969"}
        content={themeStatus ? "暗黑模式" : "亮色模式"}
      >
        {themeStatus ? (
          <Button
            style={{
              color: "white",
            }}
            type="text"
            icon={<IconMoonFill />}
            onClick={getThemeLight}
          />
        ) : (
          <Button
            style={{ color: "black" }}
            type="text"
            icon={<IconSunFill />}
            onClick={getThemeDark}
          />
        )}
      </Tooltip>
      <Button type="text" onClick={handleLogin}>
        登录
      </Button>
      <Button type="text" onClick={handleRes}>
        注册
      </Button>
    </div>
  );
};

export default connect((state) => ({ theme: state.Disposition }), {
  DarkTheme: createDarkTheme,
  LightTheme: createLightTheme,
  LoginBtn: createLogin,
  RegisterBtn: createRegister,
})(HeaderRight);
