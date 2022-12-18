<template>
  <div class="lock_page">
    <div class="lock_page_unlock" @click="isShowBlur = true">
      <el-link :underline="false" :icon="Lock" class="el_link_unlock"></el-link>
      <span>点击解锁</span>
    </div>
    <div class="lock_page_time">
      <div class="houers">
        <span>{{ Houers }}</span>
      </div>
      <div class="minutes">
        <span>{{ minutes }}</span>
      </div>
    </div>
    <div class="lock_page_footer">
      <span>{{ date }} {{ w }}</span>
    </div>
  </div>

  <div class="blur_page" v-show="isShowBlur">
    <div class="blur_page_enter">
      <img :src="avatar" />
      <el-form :model="form" ref="formRef">
        <el-form-item
          prop="password"
          :rules="[
            { required: true, message: '请输入锁屏密码', trigger: 'blur' },
          ]"
          :show-message="true"
          :inline-message="true"
        >
          <el-input
            v-model="form.password"
            autocomplete="off"
            type="password"
            show-password
            placeholder="请输入锁屏密码"
          />
        </el-form-item>
      </el-form>
      <div class="blur_page_link">
        <el-button type="primary" link @click="isShowBlur = false">
          返回
        </el-button>
        <el-button type="primary" link @click="backToLogin">返回登录</el-button>
        <el-button type="primary" link @click="enter(formRef)">进入</el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="LockPage">
import type { FormInstance } from 'element-plus';

import dayjs from 'dayjs';
import { Lock } from '@element-plus/icons-vue';
import LockStore from '@/stores/modules/Lock';
import avatar from '@/assets/img/avatar.jpg';

// router
const router = useRouter();

// pinia
const lock = LockStore();

let Houers = ref<string | number | undefined>();
let minutes = ref<string | number | undefined>();
let timer: NodeJS.Timer | null = null;

const date = dayjs().format('YYYY-MM-DD');
const w = ref<string | undefined>();

const getTimer: Function = () => {
  const timer: Date = new Date();
  Houers.value =
    timer.getHours() < 10 ? '0' + timer.getHours() : timer.getHours();
  minutes.value =
    timer.getMinutes() < 10 ? '0' + timer.getMinutes() : timer.getMinutes();
};

let isShowBlur = ref<Boolean>(false);
const formRef = ref<FormInstance>();
const form = reactive({
  password: '' as string,
});
const backToLogin = () => {
  // router.push({ path: '/' });
};
const enter = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      lock.leaveLockPage(false, form.password);
    }
  });
};

onMounted(() => {
  getTimer();
  timer = setInterval(() => {
    getTimer();
  }, 1000);

  const now: dayjs.Dayjs = dayjs();
  switch (now.$W) {
    case 0:
      w.value = '星期天';
      break;
    case 1:
      w.value = '星期一';
      break;
    case 2:
      w.value = '星期二';
      break;
    case 3:
      w.value = '星期三';
      break;
    case 4:
      w.value = '星期四';
      break;
    case 5:
      w.value = '星期五';
      break;
    case 6:
      w.value = '星期六';
      break;
  }
});

onBeforeUnmount(() => {
  clearInterval(Number(timer));
});
</script>

<style scoped lang="less">
.lock_page {
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #000000;
  color: #bababa;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &_unlock {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .el_link_unlock {
      font-size: 18px;
      color: #fff;
      cursor: pointer;
    }
    span {
      font-size: 20px;
      cursor: pointer;
    }
  }
  &_time {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    .houers,
    .minutes {
      background-color: #141313;
      border-radius: 30px;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &_footer {
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-bottom: 40px;
  }
}
.blur_page {
  z-index: 9999;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  justify-content: center;
  align-items: center;
  color: #bababa;
  &_enter {
    width: 260px;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    img {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
  &_link {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
