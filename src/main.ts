import { createApp } from 'vue';

import App from './App.vue';
import router from './router';
import stores from './stores';

import '@/assets/style/base.css';
import '@/assets/style/ep.less';
import '@/assets/style/adaptation.less';

// import 'element-plus/dist/index.css';
import 'ant-design-vue/dist/antd.css';

import * as ElementPlusIconsVue from '@element-plus/icons-vue';

const app = createApp(App);

// 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}

// 动画
app.component(ElCollapseTransition.name, ElCollapseTransition);
app.use(router);
app.use(stores);
app.mount('#app');
