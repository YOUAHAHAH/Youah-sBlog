<template>
  <el-button
    link
    :icon="collapse.collapse ? Expand : Fold"
    @click="changeCollapse()"
    style="font-size: 20px"
  ></el-button>
</template>

<script setup lang="ts" name="IsCollapse">
import { Fold, Expand } from '@element-plus/icons-vue';
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
