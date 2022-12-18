import { defineStore } from 'pinia';

import { setToken, removeToken } from '@/utils/token';
import { userGetRouters } from '@/api/modules/list';
import { removeSessionStore } from '@/utils/storage';

import type { AppRouteRecordRaw } from '@/router/types';
import type { FcResponse } from '@/api/type';

interface PermissionState {
  [key: string]: any;
  MenuList: AppRouteRecordRaw[];
}

const PerimssionStore: Function = defineStore('perimssionRouter', {
  state: (): PermissionState => ({
    MenuList: [],
    userInfo: {},
  }),

  getters: {
    getMenuList(): AppRouteRecordRaw[] {
      return this.MenuList;
    },
    getUserInfo(): string {
      return this.userInfo;
    },
  },

  actions: {
    setUserInfo(userInfo: string) {
      this.userInfo = userInfo;
      setToken(this.userInfo.token);
    },

    setLoginOut() {
      this.userInfo = {};
      removeSessionStore('APP_LOCK_KEY');
      removeToken();
    },

    async buildRoutesAction(): Promise<AppRouteRecordRaw[]> {
      let routes: AppRouteRecordRaw[] = [];

      // const res: [any, any | undefined] = await userGetRouters();
      // const { code, data, msg } = res[1];
      // if (code === 200) {
      //   routes = data;
      // } else {
      //   ElMessage.warning(msg);
      // }
      return routes;
    },
  },
});

export default PerimssionStore;
