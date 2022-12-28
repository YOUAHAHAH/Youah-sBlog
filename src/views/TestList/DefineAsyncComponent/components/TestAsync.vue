<template>
  <div>
    <el-image :src="avatar" fit="cover" class="img" />
    <p>测试Async组件</p>
  </div>
</template>

<script setup lang="ts">
import avatar from '../../../../../public/img/aaa.jpg';
</script>

<style scoped lang="less">
.img {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}
</style>
