import { defineStore } from 'pinia';

interface IsCollapse {
  collapse: boolean;
  collapseDark: boolean;
  showMask: boolean;
}

const IsCollapseStore: Function = defineStore('isCollapse', {
  state: (): IsCollapse => ({
    collapse: false,
    collapseDark: false,
    showMask: false,
  }),

  getters: {
    getCollapseMask(): boolean {
      return this.showMask;
    },

    getCollapseDark(): boolean {
      return this.collapseDark;
    },
  },

  actions: {
    changeCollapse(status: boolean): boolean {
      return (this.collapse = status);
    },

    closeCollapse(status: boolean): boolean {
      return (this.collapseDark = status);
    },
  },
});

export default IsCollapseStore;
