<template>
  <el-form
    ref="registerForm"
    :model="registerUser"
    :rules="registerRules"
    label-width="100px"
    class="registerForm sign-up-form"
  >
    <el-form-item label="用户名" prop="name">
      <el-input
        v-model="registerUser.name"
        placeholder="Enter UserName..."
      ></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input
        v-model="registerUser.email"
        placeholder="Enter Email..."
      ></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input
        v-model="registerUser.password"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="password2">
      <el-input
        v-model="registerUser.password2"
        type="password"
        placeholder="Enter Password..."
      ></el-input>
    </el-form-item>

    <el-form-item label="选择身份">
      <el-select v-model="registerUser.role" placeholder="请选择身份">
        <el-option label="管理员" value="admin"></el-option>
        <el-option label="用户" value="user"></el-option>
        <el-option label="游客" value="visitor"></el-option>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button
        @click="handleRegister(registerForm)"
        type="primary"
        class="submit-btn"
      >
        注册
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup name="registerForm">
import type { FormInstance } from 'element-plus';
import type { FcResponse } from '@/api/type';
import { userLogin } from '@/api/modules/list';

const props = defineProps({
  registerUser: {
    type: Object,
    required: true,
  },
  registerRules: {
    type: Object,
    required: true,
  },
});

const { registerRules, loginUser }: Record<string, any> = props;
const registerForm = ref<FormInstance>();

const handleRegister = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      userLogin({ values: loginUser })
        .then((res: [any, FcResponse<unknown> | undefined]) => {
          console.log(res);
        })
        .catch((err) => {
          ElMessage.error(err);
        });
    }
  });
};
</script>
