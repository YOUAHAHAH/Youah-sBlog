<template>
  <div class="lock_page">
    <div class="lock_page_unlock" @click="isShowBlur = true">
      <a-button type="link" class="el_link_unlock">
        <template #icon><lock-outlined /></template>
      </a-button>
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
      <span>{{ nowDate('YYYY-MM-DD') }} {{ weekDay() }}</span>
    </div>
  </div>

  <div class="blur_page" v-show="isShowBlur">
    <div class="blur_page_enter">
      <img :src="avatar" />
      <a-form :model="form" ref="formRef">
        <a-form-item
          name="password"
          :rules="[
            { required: true, message: '请输入锁屏密码', trigger: 'blur' },
          ]"
        >
          <a-input-password
            v-model:value="form.password"
            autocomplete="off"
            allow-clear
            placeholder="请输入锁屏密码"
          />
        </a-form-item>
      </a-form>
      <div class="blur_page_link">
        <a-button type="link" @click="isShowBlur = false">返回</a-button>
        <a-button type="link" @click="backToLogin">返回登录</a-button>
        <a-button type="link" @click="enter">进入</a-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="LockPage">
import type { FormInstance } from 'ant-design-vue';
import { LockOutlined } from '@ant-design/icons-vue';
import LockStore from '@/stores/modules/Lock';
import avatar from '@/assets/img/avatar.jpg';
import { nowDate, weekDay } from '@/utils/timeConfiguration';

// router
// const router = useRouter();

// pinia
const lock = LockStore();

let Houers = ref<string | number | undefined>();
let minutes = ref<string | number | undefined>();
let timer: NodeJS.Timer | null = null;

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

const enter = () => {
  formRef.value?.validate().then(() => {
    lock.leaveLockPage(false, form.password);
    formRef.value?.resetFields();
  });
};

onMounted(() => {
  getTimer();
  timer = setInterval(() => {
    getTimer();
  }, 1000);
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
