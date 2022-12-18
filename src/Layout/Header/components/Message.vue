<template>
  <el-popover trigger="click">
    <template #reference>
      <el-badge is-dot class="item">
        <el-button link class="share-button">
          <svg
            t="1670394347874"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4584"
            width="20"
            height="20"
          >
            <path
              d="M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"
              p-id="4585"
            ></path>
          </svg>
        </el-button>
      </el-badge>
    </template>
    <el-tabs
      v-model="data.activeName"
      class="demo-tabs"
      @tab-click="handleClick"
    >
      <el-tab-pane
        v-for="item in data.tabData"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >
        <component
          v-if="item.isLoad"
          :is="item.component"
          :keyWord="data.keyWord"
        />
      </el-tab-pane>
    </el-tabs>
  </el-popover>
</template>

<script setup lang="ts">
import type { LocationQueryValue } from 'vue-router';
import type { TabsPaneContext } from 'element-plus';
import type { Component } from '@/router/types';

import Notice from '../components/Message/Notice.vue';
import Information from '../components/Message/Information.vue';
import Agent from '../components/Message/Agent.vue';

interface tabData {
  id: number;
  component: Component | string;
  label: string;
  name: string;
  isLoad: boolean;
}

let data = reactive({
  activeName: 'first',
  keyWord: '' as unknown as LocationQueryValue | LocationQueryValue[],
  tabData: [
    {
      id: 1,
      component: markRaw(Notice),
      label: '通 知',
      name: 'first',
      isLoad: true,
    } as tabData,
    {
      id: 2,
      component: markRaw(Information),
      label: '消 息',
      name: 'second',
      isLoad: false,
    } as tabData,
    {
      id: 3,
      component: markRaw(Agent),
      label: '代 办',
      name: 'third',
      isLoad: false,
    } as tabData,
  ],
});

const handleClick = (tab: TabsPaneContext, event: Event) => {
  data.tabData.map((item: tabData) => {
    if (item.name == tab.props.name) {
      return (item.isLoad = true);
    }
  });
};

const route = useRoute();

onMounted(async () => {
  data.keyWord = route.query.keyWord;
});

onBeforeRouteUpdate(async () => {
  data.activeName = 'first';
});
</script>
