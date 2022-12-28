<template>
  <div>
    <HomeHeader />
    {{ nowDate() }}
    {{ weekDay() }}
  </div>
</template>

<script setup lang="ts" name="Home">
import { nowDate, weekDay } from '@/utils/timeConfiguration';
import HomeHeader from './components/HomeHeader.vue';
</script>

<style scoped lang="less"></style>
