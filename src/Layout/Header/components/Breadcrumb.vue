<template>
  <el-breadcrumb
    class="breadcrumb"
    :separator-icon="ArrowRight"
    style="margin-left: 10px"
  >
    <el-breadcrumb-item v-for="item in breadItem" :key="item.path">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts" name="Breadcrumb">
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import { ArrowRight } from '@element-plus/icons-vue';

const route: RouteLocationNormalizedLoaded = useRoute();

const breadItem = computed<any>(() => {
  return route.matched;
});
</script>
