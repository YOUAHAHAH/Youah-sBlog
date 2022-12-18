<template>
  <div>
    <div>
      <el-image :src="avatar" fit="cover" class="img" />
    </div>
    <TestAsync />
  </div>
</template>

<script setup lang="ts">
import avatar from '../../../../public/img/aaa.jpg';

import TestAsyncVue from './components/TestAsync.vue';
import { AsyncComponent } from '@/hooks/AsyncComponent';

const TestAsync = AsyncComponent(TestAsyncVue as unknown as any, 2000);
</script>

<style scoped lang="less">
.img {
  width: 100%;
  height: 300px;
  border-radius: 8px;
}
</style>
