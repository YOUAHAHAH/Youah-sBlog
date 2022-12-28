<template>
  <a-modal
    v-model:visible="showModal"
    title="锁定屏幕"
    :footer="null"
    class="lockModal"
    @cancel="cancel"
  >
    <a-form :model="form" ref="formRef">
      <a-form-item
        label="锁屏密码"
        name="password"
        :rules="[
          { required: true, message: '请输入锁屏密码', trigger: 'blur' },
        ]"
      >
        <a-input-password
          v-model:value="form.password"
          autocomplete="off"
          placeholder="请输入锁屏密码"
          allow-clear
        />
      </a-form-item>
      <a-form-item>
        <a-button
          type="primary"
          @click="submitForm"
          style="width: 100%; margin-top: 10px"
        >
          锁定
        </a-button>
      </a-form-item>
    </a-form>
  </a-modal>
</template>

<script setup lang="ts" name="LockModal">
import type { FormInstance } from 'ant-design-vue';

import LockStore from '@/stores/modules/Lock';

// pinia
const lock = LockStore();

let showModal = ref<boolean>(false);

const formRef = ref<FormInstance>();
const form = reactive({
  password: '' as string,
});

const cancel = () => {
  formRef.value?.resetFields();
};

const submitForm = () => {
  formRef.value?.validate().then(() => {
    showModal.value = false;
    lock.enterLockPage(true, window.btoa(form.password));
    formRef.value?.resetFields();
  });
};

const showLockModal = async () => {
  showModal.value = true;
};

// 暴露给父组件 showLockModal
defineExpose({
  showLockModal,
});
</script>
