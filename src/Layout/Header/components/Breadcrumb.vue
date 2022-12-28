<template>
  <a-breadcrumb class="breadcrumb" style="margin-left: 10px">
    <a-breadcrumb-item v-for="item in breadItem" :key="item.path">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts" name="Breadcrumb">
import type { RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();

const breadItem = computed<any>(() => {
  return route.matched;
});
</script>
