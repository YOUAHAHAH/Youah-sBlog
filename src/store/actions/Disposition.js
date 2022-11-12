/*
 *  获取主题颜色
 **/

export const createDarkTheme = (data) => ({
  type: "getDarkTheme",
  data,
});

export const createLightTheme = (data) => ({
  type: "getLightTheme",
  data,
});
