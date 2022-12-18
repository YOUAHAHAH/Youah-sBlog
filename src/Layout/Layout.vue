<template>
  <el-container class="layout-container-demo">
    <LockPage v-if="isLock" />

    <el-container>
      <AsideDark v-if="isCollapseMask"></AsideDark>
      <el-aside v-else>
        <Aside></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <transition name="slide-left" mode="out-in">
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <!-- <RouterView /> -->
        </el-main>
        <!-- <el-footer>
          <Footer></Footer>
        </el-footer> -->
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts" name="Layout">
import Header from './Header/Header.vue';
import Aside from './Aside/Aside.vue';
import AsideDark from './Aside/AsideDark.vue';
// import Footer from './Footer/Footer.vue';
import LockPage from './Header/components/Lock/LockPage.vue';
import LockStore from '@/stores/modules/Lock';
import IsCollapseStore from '@/stores/modules/isCollapse';

// pinia
const lock = LockStore();
const collapse = IsCollapseStore();

const isLock = computed<boolean>(() => {
  return lock.getIsLock;
});
const isCollapseMask = computed<boolean>(() => {
  return collapse.getCollapseMask;
});

function setDeviceClass() {
  if (window.innerWidth <= 1000) {
    collapse.showMask = true;
    collapse.changeCollapse(false);
  } else {
    collapse.showMask = false;
  }
}

onMounted(() => {
  setDeviceClass();
  window.addEventListener('resize', () => {
    setDeviceClass();
  });
});
</script>

<style lang="less" scoped>
.layout-container-demo {
  .el-header {
    position: relative;
    height: 82px;
    padding: 0;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.08);
  }
  .el-aside {
    height: 100vh;
    width: auto;
  }
  .el-main {
    padding: 20px;
    background-color: #f0f2f5;
  }
}
.slide-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-left-enter-to {
  transform: translateX(0px);
}
.slide-left-leave-from {
  transform: translateX(0);
}
.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s;
}
</style>
