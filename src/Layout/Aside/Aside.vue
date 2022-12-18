<template>
  <div class="menu">
    <div class="logo">
      <img src="../../assets/img/纸飞机.png" />
      <!-- <div class="transition-box">{{ !store.collapse ? '纸飞机' : '' }}</div> -->
    </div>
    <el-menu
      :collapse="store.collapse"
      active-text-color="#0960BD"
      background-color="#001529"
      class="el-menu-vertical-demo"
      text-color="#fff"
      :unique-opened="true"
      :default-active="(activeName as unknown as string)"
      router
    >
      <el-sub-menu
        v-for="item in hasChildren"
        :key="item.name"
        :index="(item.name as unknown as string)"
      >
        <template #title>
          <el-icon>
            <component :is="item.icon" />
          </el-icon>
          <span>{{ item.title }}</span>
        </template>
        <el-menu-item
          v-for="subItem in item.children"
          :key="subItem.name"
          :index="(subItem.name as unknown as string)"
          @click="handleMenuItem(subItem)"
        >
          <template #title>
            <span>{{ subItem.title }}</span>
          </template>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item
        v-for="item in noHasChildren"
        :key="item.name"
        :index="(item.name as unknown as string)"
      >
        <el-icon>
          <component :is="item.icon" />
        </el-icon>
        <template #title>
          <span>{{ item.title }}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts" name="Aside">
import type { ComputedRef } from 'vue';
import type { RouteRecordName } from 'vue-router';
import type { AppRouteRecordRaw } from '@/router/types';
import publicRouter from '@/router/publicRouter';
import IsCollapseStore from '@/stores/modules/isCollapse';
import TagListStore from '@/stores/modules/Tag';

// pinia
const store = IsCollapseStore();
const tagStore = TagListStore();

// route
const route = useRoute();
const activeName: ComputedRef<RouteRecordName | null | undefined> = computed(
  () => {
    const { name } = route;
    return name;
  },
);

// routerList
const routerList: AppRouteRecordRaw[] = publicRouter;

const handleMenuItem: Function = (item: AppRouteRecordRaw) => {
  tagStore.addTagList(item);
};

const noHasChildren = computed(() => {
  return routerList.filter((item: AppRouteRecordRaw) => !item.children);
});
const hasChildren = computed(() => {
  return routerList.filter((item: AppRouteRecordRaw) => item.children);
});
</script>

<style lang="less" scoped>
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
