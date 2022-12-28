<template>
  <div>
    <ul class="list" v-loading="loading" element-loading-text="加载中···">
      <li
        class="list_li"
        v-for="item in data.messageList.slice(
          (paginationData.currentPage - 1) * paginationData.pageSize,
          paginationData.currentPage * paginationData.pageSize,
        )"
        :key="item.id"
      >
        <a-avatar :src="item.picUrl" shape="square" size="large" />
        <div class="list_li_content">
          <a-tooltip placement="top" color="#2db7f5" arrow-point-at-center>
            <template #title>{{ item.title }}</template>
            <div>{{ item.title }}</div>
          </a-tooltip>
          <div>{{ item.time }}</div>
        </div>
      </li>
    </ul>
    <Pagination
      class="pagination"
      :Total="paginationData.total"
      :BackGround="paginationData.background"
      :PageSize="paginationData.pageSize"
      :CurrentPage="paginationData.currentPage"
      :Small="paginationData.small"
      :PageSizeArray="paginationData.pageSizeArray"
      :LayoutArray="paginationData.layoutArray"
      @handleSizeChange="handleSizeChange"
      @handleCurrentChange="handleCurrentChange"
    ></Pagination>
  </div>
</template>

<script setup lang="ts">
import messageData from '../../data/message.json';

import Pagination from '@/components/Pagination.vue';

let loading = ref<boolean>(true);

const paginationData = reactive({
  total: messageData.messageData.elTabPaneTwo.data.length,
  background: true,
  pageSize: 5,
  currentPage: 1,
  small: true,
  pageSizeArray: [5, 10, 20, 50],
  layoutArray: ['prev', 'pager', 'next'],
});

const data = reactive({
  messageList: null as any,
});

const handleSizeChange = (val: number) => {
  paginationData.pageSize = val;
};

const handleCurrentChange = (val: number) => {
  paginationData.currentPage = val;
};

onBeforeMount(() => {
  data.messageList = messageData.messageData.elTabPaneTwo.data;
  setTimeout(() => {
    loading.value = false;
  }, 500);
});
</script>

<style scoped lang="less">
.pagination {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.ant-avatar {
  background-color: transparent !important;
  margin-right: 16px;
}
</style>
