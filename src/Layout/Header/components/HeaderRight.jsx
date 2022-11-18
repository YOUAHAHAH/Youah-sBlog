import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  createDarkTheme,
  createLightTheme,
} from "../../../store/actions/Disposition.js";
import { createLogin, createRegister } from "../../../store/actions/Login.js";
// import {
//   createSettingHeaderTrue,
//   createSettingHeaderFalse,
// } from "../../../store/actions/Setting.js";
import { Button, Tooltip } from "@arco-design/web-react";
import {
  IconSunFill,
  IconMoonFill,
  IconFullscreen,
  IconFullscreenExit,
  IconSearch,
} from "@arco-design/web-react/icon";
import h from "../../index.module.less";
import Intro from "../../../utils/Intro";

Intro.setOptions({
  steps: [
    {
      element: "#step1",
      intro: "输入关键字即可搜索文章",
    },
    {
      element: "#step2",
      intro: "点击即可全屏,ESC即可退出全屏",
    },
    {
      element: "#step3",
      intro: "默认为亮色模式,点击即可更改为黑暗模式",
    },
    {
      element: "#step4",
      intro: "默认为游客模式,登录即可评论和点赞",
    },
  ],
});

// 用户是否是第一次进入
const themeState =
  localStorage.getItem("BlogTheme") === null
    ? "true"
    : localStorage.getItem("BlogTheme");
// const BlogSetting =
//   JSON.parse(localStorage.getItem("BlogSetting")).BlogSettingHeader === null
//     ? { BlogSettingHeader: "true" }
//     : JSON.parse(localStorage.getItem("BlogSetting"));

const HeaderRight = (props) => {
  const navigate = useNavigate();
  const [full, setFull] = useState(false); // 全屏
  const [themeStatus, setThemeStatus] = useState(() => {
    return themeState === "true" ? true : false;
  }); // 主题
  // const [headerStatus, setHeaderStatus] = useState(() => {
  //   return BlogSetting.BlogSettingHeader === "true" ? true : false;
  // });
  const { stepState, changeState } = props;

  // 引导
  useEffect(() => {
    if (stepState) {
      Intro.start();
      changeState(false);
    }
  }, [stepState]);

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
    navigate("/Login");
    props.LoginBtn(0);
  };

  // 注册
  const handleRes = () => {
    navigate("/Login");
    props.RegisterBtn(1);
  };

  // 设置固定头部
  // const fixedHeaderTrue = () => {
  //   setHeaderStatus(!headerStatus);
  //   props.HeaderTrue("true");
  // };

  // 取消固定头部
  // const fixedHeaderFalse = () => {
  //   setHeaderStatus(!headerStatus);
  //   props.HeaderFalse("false");
  // };

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

    // if (headerStatus === "true") {
    //   setHeaderStatus(true);
    // } else {
    //   setHeaderStatus(false);
    // }
  }, []);

  return (
    <>
      <div className={h.btnGroup}>
        {/* 搜索 */}
        <Tooltip
          position="bottom"
          trigger="hover"
          mini
          color={"#4E5969"}
          content="搜索"
        >
          <Button type="text" icon={<IconSearch />} id="step1" />
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
              id="step2"
            />
          ) : (
            <Button
              type="text"
              icon={<IconFullscreen />}
              onClick={handleFullScreen}
              id="step2"
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
              id="step3"
            />
          ) : (
            <Button
              style={{ color: "black" }}
              type="text"
              icon={<IconSunFill />}
              onClick={getThemeDark}
              id="step3"
            />
          )}
        </Tooltip>

        {/* 设置 */}
        {/* <Tooltip
          position="bottom"
          trigger="hover"
          mini
          color={"#4E5969"}
          content={headerStatus ? "取消固定Header" : "固定Header"}
        >
          {headerStatus ? (
            <Button
              style={{
                color: "white",
                padding: "0 6px 0 6px",
                lineHeight: "30px",
              }}
              type="text"
              onClick={fixedHeaderTrue}
            >
              <span
                className="iconfont icon-ic24-gps-fixed"
                style={{ fontSize: "18px" }}
              ></span>
            </Button>
          ) : (
            <Button
              style={{
                color: "white",
                padding: "0 6px 0 6px",
                lineHeight: "30px",
              }}
              type="text"
              onClick={fixedHeaderFalse}
            >
              <span
                className="iconfont icon-ic_gps_not_fixed"
                style={{ fontSize: "18px" }}
              ></span>
            </Button>
          )}
        </Tooltip> */}

        <Button type="text" onClick={handleLogin} id="step4">
          登录
        </Button>
        <Button type="text" onClick={handleRes}>
          注册
        </Button>
      </div>
    </>
  );
};

export default connect((state) => ({ checked: state.Setting }), {
  DarkTheme: createDarkTheme,
  LightTheme: createLightTheme,
  LoginBtn: createLogin,
  RegisterBtn: createRegister,
  // HeaderTrue: createSettingHeaderTrue,
  // HeaderFalse: createSettingHeaderFalse,
})(HeaderRight);
