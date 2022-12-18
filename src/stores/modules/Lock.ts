import { defineStore } from 'pinia';
import { setSessionStore, getSessionStore } from '@/utils/storage';

export interface Lock {
  isLock: boolean;
  pwd: string;
}

const value =
  getSessionStore('APP_LOCK_KEY') === null
    ? setSessionStore('APP_LOCK_KEY', { key: false, pwd: '' })
    : getSessionStore('APP_LOCK_KEY');

const LockStore: Function = defineStore('lock', {
  state: (): Lock => ({
    isLock: value === undefined ? false : value.key,
    pwd: value === undefined ? '' : value.pwd,
  }),

  getters: {
    getIsLock(): boolean {
      setSessionStore('APP_LOCK_KEY', {
        key: this.isLock,
        pwd: this.pwd,
      });
      return this.isLock;
    },
  },

  actions: {
    enterLockPage(status: boolean, password: string): void {
      this.isLock = status;
      this.pwd = password;
    },

    leaveLockPage(status: boolean, password: string) {
      let { pwd } = getSessionStore('APP_LOCK_KEY');
      pwd = window.atob(pwd);

      if (password === pwd) {
        return (this.isLock = status);
      } else {
        return ElMessage({
          showClose: true,
          message: '锁屏密码错误',
          type: 'error',
        });
      }
    },
  },
});

export default LockStore;
