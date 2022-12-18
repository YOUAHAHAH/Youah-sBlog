<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <img :src="avatar" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="House" command="workbench">
          个人
        </el-dropdown-item>
        <el-dropdown-item :icon="Lock" command="lockScreen" divided>
          锁屏
        </el-dropdown-item>
        <el-dropdown-item :icon="SwitchButton" command="login" divided>
          退出
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

  <LockModal ref="changeModal" />
</template>

<script setup lang="ts" name="UserDropdown">
import { House, Lock, SwitchButton } from '@element-plus/icons-vue';
import perimssionRouter from '@/stores/modules/Permission';
import { removeToken } from '@/utils/token';

import avatar from '@/assets/img/avatar.jpg';
import LockModal from './Lock/LockModal.vue';

// pinia
const perimssionStore = perimssionRouter();
const router = useRouter();

const changeModal = ref<any>(); // 获取子组件上的属性

const handleCommand = (command: string) => {
  if (command === 'lockScreen') return changeModal.value.showLockModal();
  else if (command === 'lockScreen')
    return router.push({ path: `/${command}` });
  else if (command === 'login') {
    perimssionStore.setLoginOut();
    removeToken();
    router.push({ path: `/${command}` });
  }
};
</script>

<style scoped lang="less">
.el-dropdown-link {
  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}
</style>
