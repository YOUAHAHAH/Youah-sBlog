import { fileURLToPath, URL } from 'node:url';
import {
  defineConfig,
  loadEnv,
  type BuildOptions,
  type ConfigEnv,
  type UserConfig,
} from 'vite';
import dayjs from 'dayjs';
import { OUTPUT_DIR, VITE_PORT } from './config/constant';
import vitePlugins from './config/vitePlugins';
import viteBuild from './config/viteBuild';
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;

const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss'),
};

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: './', // 打包后引用基础路径

    build: viteBuild(OUTPUT_DIR) as unknown as BuildOptions | undefined,

    plugins: vitePlugins({ command, mode }),

    server: {
      host: '0.0.0.0', // IP配置，支持从IP启动
      port: VITE_PORT,
      open: true,
      // proxy: {
      //   '/api': {
      //     target: 'http://175.178.169.52:8989/',
      //     changeOrigin: true,
      //     pathRewrite: { '^/api': '/' },
      //   } as unknown as string,
      // },
    },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)), // 引用别名,fileURLToPath为了保证转码不会乱码
      },
    },

    define: {
      __APP_ENV__: env.APP_ENV,
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
  };
});
