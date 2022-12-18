<template>
  <el-dialog v-model="showModal" title="锁定屏幕" draggable class="lockModal">
    <el-form :model="form" ref="formRef">
      <el-form-item
        label="锁屏密码"
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
          clearable
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button
        @click="submitForm(formRef)"
        type="primary"
        style="width: 100%"
      >
        锁定
      </el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts" name="LockModal">
import type { FormInstance } from 'element-plus';
import LockStore from '@/stores/modules/Lock';

// pinia
const lock = LockStore();

let showModal = ref<boolean>(false);

const form = reactive({
  password: '' as string,
});
const formRef = ref<FormInstance>();

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      showModal.value = false;
      lock.enterLockPage(true, window.btoa(form.password));
      formEl.resetFields();
    }
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
