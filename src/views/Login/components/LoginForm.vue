<template>
  <el-form
    ref="loginForm"
    :model="loginUser"
    :rules="rules"
    label-width="100px"
    class="loginForm sign-in-form"
  >
    <el-form-item
      label="账号"
      prop="userName"
      :show-message="true"
      :inline-message="true"
    >
      <el-input
        v-model="loginUser.userName"
        placeholder="请输入账号"
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item
      label="密码"
      prop="password"
      :show-message="true"
      :inline-message="true"
    >
      <el-input
        v-model="loginUser.password"
        type="password"
        placeholder="请输入密码"
        show-password
        clearable
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button
        @click="handleLogin(loginForm)"
        type="primary"
        class="submit-btn"
        :loading="loginLoading"
      >
        登录
      </el-button>
    </el-form-item>
    <div class="tiparea">
      <p>
        忘记密码？
        <a>立即找回</a>
      </p>
    </div>
  </el-form>
</template>

<script setup lang="ts" name="LoginForm">
import type { FormInstance } from 'element-plus';
import type { FcResponse } from '@/api/type';
import { userLogin } from '@/api/modules/list';
import { setToken } from '@/utils/token';

const router = useRouter();

const props = defineProps({
  loginUser: {
    type: Object,
    required: true,
  },
  rules: {
    type: Object,
    required: true,
  },
});
const { rules, loginUser }: Record<string, any> = props;

const loginForm = ref<FormInstance>();
let loginLoading = ref<boolean>(false);

const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      loginLoading.value = true;
      userLogin(loginUser)
        .then((res: [any, FcResponse<unknown> | undefined]) => {
          const { code, data, msg } = res[1] as unknown as any;
          if (code === 200) {
            ElMessage.success(msg);
            setToken(data.token);
            loginLoading.value = false;
            router.push({ path: '/workbench' });
            formEl.resetFields();
          } else {
            ElMessage.error(msg);
            loginLoading.value = false;
          }
        })
        .catch((err) => {
          ElMessage.error(err);
          loginLoading.value = false;
        });
    }
  });
};
</script>

<style scoped lang="less">
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
  .submit-btn {
    width: 100%;
  }
  .tiparea {
    text-align: right;
    font-size: 12px;
    color: #333;
    a {
      color: #409eff;
    }
  }
}
</style>
