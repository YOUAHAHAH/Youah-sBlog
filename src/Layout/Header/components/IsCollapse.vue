<template>
  <a-button type="link" @click="changeCollapse()">
    <template #icon>
      <span v-show="collapse.collapse">
        <menu-unfold-outlined style="color: #000000" />
      </span>
      <span v-show="!collapse.collapse">
        <menu-fold-outlined style="color: #000000" />
      </span>
    </template>
  </a-button>
</template>

<script setup lang="ts" name="IsCollapse">
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue';
import IsCollapseStore from '@/stores/modules/isCollapse';

const collapse = IsCollapseStore();

const changeCollapse = (): void => {
  if (collapse.showMask) {
    collapse.closeCollapse(!collapse.collapseDark);
  } else {
    collapse.changeCollapse(!collapse.collapse);
  }
};
</script>
