<template>
  <div class="header">
    <div class="header_left">
      <IsCollapseVue />
      <Breadcrumb />
    </div>
    <div class="header_right">
      <Message />
      <FullScreenVue />
      <UserDropdown />
    </div>
  </div>
  <div class="tag">
    <Tag />
  </div>
</template>

<script setup lang="ts" name="Header">
import IsCollapseVue from './components/IsCollapse.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Message from './components/Message.vue';
import FullScreenVue from './components/FullScreen.vue';
import UserDropdown from './components/UserDropdown.vue';
import Tag from './components/Tag.vue';
</script>

<style scoped lang="less">
.header {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  &_left {
    display: flex;
    align-items: center;
  }
  &_right {
    display: flex;
    margin-right: 50px;
    align-items: center;
    .el-button {
      margin: 0 10px !important;
    }
  }
}
.tag {
  height: 39px;
  border-bottom: 1px solid #eee;
}
</style>
