import type { AppRouteRecordRaw } from '../types';
import LayoutRouter from '../base';

const HomeRouter: AppRouteRecordRaw = {
  ...LayoutRouter,
  name: 'workbench',
  redirect: '/workbench',
  icon: 'HomeFilled',
  title: '首页',
  meta: {
    title: '首页',
  },
  children: [
    {
      path: '/workbench',
      name: 'workbench',
      component: () => import('@/views/Home/Workbench.vue'),
      title: '工作台',
      meta: {
        title: '工作台',
      },
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('@/views/Home/Analysis.vue'),
      title: '分析页',
      meta: {
        title: '分析页',
      },
    },
  ],
};

export default HomeRouter;
