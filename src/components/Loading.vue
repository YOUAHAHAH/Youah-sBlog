<template>
  <div v-loading="loading" element-loading-text="加载中···"></div>
</template>

<script setup lang="ts">
const loading = ref(true);
</script>

<style scoped lang="less">
div {
  width: 100%;
  height: 300px;
}
</style>
