<template>
  <div class="home_header_main">
    <el-card class="box-card">
      <div class="img">
        <el-image :src="avatar" :preview-src-list="srcList" fit="cover" />
      </div>
      <div class="content">{{ greet }} Admin</div>
    </el-card>
  </div>
</template>

<script setup lang="ts" name="HomeHeader">
import avatar from '@/assets/img/avatar.jpg';

const srcList: string[] = [avatar];

const timer: Date = new Date();
const Houers: number = timer.getHours();
const greet = ref<string>('');

onBeforeMount(() => {
  if (Houers >= 0 && Houers <= 6) {
    greet.value = '凌晨好！';
  } else if (Houers > 6 && Houers <= 12) {
    greet.value = '上午好！';
  } else if (Houers > 12 && Houers <= 18) {
    greet.value = '下午好！';
  } else if (Houers > 18 && Houers < 24) {
    greet.value = '晚上好！';
  }
});
</script>

<style scoped lang="less">
.home_header_main {
  width: 100%;
  .box-card {
    width: 100%;
    :deep(.el-card__body) {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
    .img {
      .el-image {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }
    .content {
      margin-left: 40px;
      font-size: 20px;
    }
  }
}
</style>
