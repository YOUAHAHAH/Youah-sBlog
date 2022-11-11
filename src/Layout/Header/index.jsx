import React, { useState } from "react";
import { Layout, Button } from "@arco-design/web-react";
import { IconSunFill, IconMoonFill } from "@arco-design/web-react/icon";
const Header = Layout.Header;

export default function index() {
  const [themeStatus, useThemeStatus] = useState(false);

  // 设置为暗黑主题
  const getThemeLight = () => {
    useThemeStatus(!themeStatus);
    document.body.removeAttribute("arco-theme");
  };

  // 恢复亮色主题
  const getThemeDark = () => {
    useThemeStatus(!themeStatus);
    document.body.setAttribute("arco-theme", "dark");
  };

  return (
    <Header>
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
          style={{
            color: "black",
          }}
          type="text"
          icon={<IconSunFill />}
          onClick={getThemeDark}
        />
      )}
    </Header>
  );
}
