/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier',
    'plugin:prettier/recommended', // 安装 eslint-config-prettier 插件避免与 prettier 冲突
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
};
