/*
 *  登录注册
 **/

export const createLogin = (data) => ({
  type: "getLoginBtn",
  data,
});

export const createRegister = (data) => ({
  type: "getRegisterBtn",
  data,
});
