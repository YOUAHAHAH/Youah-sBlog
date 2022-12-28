<template>
  <a-button type="link" @click="toggle()" style="padding: 5px">
    <template #icon>
      <span v-show="isFullscreen">
        <fullscreen-exit-outlined style="color: #000000" />
      </span>
      <span v-show="!isFullscreen">
        <fullscreen-outlined style="color: #000000" />
      </span>
    </template>
  </a-button>
</template>

<script setup lang="ts" name="FullScreen">
import type { Ref } from 'vue';
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
} from '@ant-design/icons-vue';
import { useFullscreen } from '@vueuse/core';

interface useFS {
  isFullscreen: Ref<boolean>;
  toggle: () => Promise<void>;
}

const { isFullscreen, toggle }: useFS = useFullscreen();
</script>
