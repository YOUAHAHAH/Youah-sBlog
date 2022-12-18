import type { AppRouteRecordRaw } from './types';

import Layout from '@/Layout/Layout.vue';

const LayoutRouter: AppRouteRecordRaw = {
  path: '/',
  component: markRaw(Layout),
  // redirect: '/workbench',
};

export const ErrorRouter: AppRouteRecordRaw[] = [
  {
    ...LayoutRouter,
    name: 'Error',
    title: 'Error',
    meta: {
      title: 'Error',
    },
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'ErrorPage',
        component: () => import('@/views/Error/Error.vue'),
        title: 'ErrorPage',
        meta: {
          title: 'ErrorPage',
        },
      },
    ],
  },
];

export const LoginRouter: AppRouteRecordRaw = {
  path: '/Login',
  name: 'Login',
  title: '登录',
  meta: {
    title: '登录',
  },
  component: () => import('@/views/Login/Login.vue'),
};

export default LayoutRouter;
