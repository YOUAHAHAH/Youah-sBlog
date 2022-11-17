/*
 *  设置
 **/

// 固定头部
export const createSettingHeaderTrue = (data) => ({
  type: "getSettingHeaderTrue",
  data,
});

// 不固定头像
export const createSettingHeaderFalse = (data) => ({
  type: "getSettingHeaderFalse",
  data,
});
