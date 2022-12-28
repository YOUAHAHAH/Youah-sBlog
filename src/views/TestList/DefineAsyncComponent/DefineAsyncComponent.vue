<template>
  <div>
    <el-alert
      title="异步组件测试"
      type="success"
      effect="dark"
      style="margin-bottom: 10px"
    />
    <TestAsync v-if="renderComponent" />
    <el-button @click.once="testAsync" style="margin-top: 10px" v-if="showBtn">
      测试
    </el-button>
  </div>
</template>

<script setup lang="ts">
import TestAsyncVue from './components/TestAsync.vue';
import { AsyncComponent } from '@/hooks/AsyncComponent';
import type { Component } from '@/router/types';

const TestAsync = markRaw(AsyncComponent(TestAsyncVue as Component, 2000));

let renderComponent = ref<boolean>(false);
let showBtn = ref<boolean>(true);

const testAsync = async () => {
  renderComponent.value = false;
  await nextTick(() => {
    renderComponent.value = true;
    setTimeout(() => {
      showBtn.value = false;
    }, 2000);
  });
};
</script>

<style scoped lang="less"></style>
