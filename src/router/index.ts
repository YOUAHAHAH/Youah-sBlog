import { createRouter, createWebHashHistory, type Router } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import type { AppRouteRecordRaw } from './types';
import publicRouter from './publicRouter';
import { LoginRouter, ErrorRouter } from './base';

import NProgress from '@/utils/nprogress';
import { getToken } from '@/utils/token';

import perimssionRouter from '@/stores/modules/Permission';

// 基础路径
const baseList: String[] = [];
const getBaseListName = (array: any[]) => {
  array.forEach((item) => {
    baseList.push(item.name);
    getBaseListName(item.children || []);
  });
};
getBaseListName([LoginRouter, ...publicRouter, ...ErrorRouter]);

// 创建router 实例
const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: [
    LoginRouter,
    ...publicRouter,
    ...ErrorRouter,
  ] as unknown as RouteRecordRaw[],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

router.beforeEach(async (to, from, next) => {
  document.title = to.meta.title as string;
  if (to.path !== from.path) {
    NProgress.start();
  }

  const perimssionStore = perimssionRouter();
  const menus: AppRouteRecordRaw[] = await perimssionStore.buildRoutesAction();

  if (to.path === '/login') {
    next();
  } else {
    if (getToken()) {
      next();
    } else {
      next('/login');
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
