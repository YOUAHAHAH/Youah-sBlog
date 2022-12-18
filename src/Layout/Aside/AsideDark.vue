<template>
  <transition name="el-fade-in-linear" v-show="collapse.collapseDark">
    <div class="AsideDark">
      <div class="bgDark"></div>
      <div class="AsideDark_flex">
        <div class="AsideDark_menu">
          <Aside></Aside>
        </div>
        <div class="AsideDark_mask" @click="closeAdise"></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts" name="AsideDark">
import IsCollapseStore from '@/stores/modules/isCollapse';
import Aside from './Aside.vue';

// pinia
const collapse = IsCollapseStore();

const closeAdise = () => {
  collapse.closeCollapse(false);
};
</script>

<style scoped lang="less">
.AsideDark {
  position: fixed;
  z-index: 1000;
  .bgDark {
    height: 100vh;
    width: 100vw;
    background-color: #00000073;
    z-index: 1;
  }
  &_flex {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  &_menu {
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  &_mask {
    width: 100%;
    position: relative;
    top: 0;
    right: -200px;
  }
}
.menu {
  height: 100vh;
  background-color: #001529;
  box-sizing: border-box;
}
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  height: 100%;
}
.logo {
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #001529;
  box-sizing: border-box;
  img {
    width: 40px;
    height: 40px;
  }
  .transition-box {
    color: #fff;
    font-size: 24px;
    font-weight: bolder;
  }
}
</style>
