import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  // lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // port: 8008,
    // host: '192.168.43.18',
    // open: true,
    proxy: {
      "/api": {
        target: "http://admin.youah.cc:3000",
        changeOrigin: true,
        pathRewrite: { "^/api": "/" },
      },
    },
  },
  // preview: {
  //   port: 8008,
  // },

  // 预处理less
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, //注意，这一句是在less对象中，写在外边不起作用
        modifyVars: {
          //在这里进行主题的修改，参考官方配置属性
          // "@primary-color": "#1DA57A",
          // 在less-loader@6 modifyVars 配置被移到 lessOptions 中
          // "blog-theme-img": ".arco-theme",
        },
      },
    },
  },

  define: {
    __APP_INFO__: JSON.stringify(__APP_INFO__),
  },
});
