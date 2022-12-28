import type { Plugin, ConfigEnv } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import VueSetupExtend from 'vite-plugin-vue-setup-extend';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default (env: ConfigEnv) => {
  const vitePlugins: (Plugin | Plugin[])[] = [
    vue({
      include: [/.vue$/],
    }),
    vueJsx(),
    AutoImport({
      dts: './src/auto-imports.d.ts',
      // 自动导入 vue vue-router
      imports: ['vue', 'vue-router'],
      resolvers: [
        // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
        ElementPlusResolver(),
      ],
    }),
    Components({
      dirs: ['src/components/'],
      resolvers: [
        // 自动导入 Element Plus 组件
        ElementPlusResolver(),
        AntDesignVueResolver(),
      ],
      dts: './src/components.d.ts',
    }),
    // 自定义 setup name
    VueSetupExtend(),
  ];

  return vitePlugins;
};
