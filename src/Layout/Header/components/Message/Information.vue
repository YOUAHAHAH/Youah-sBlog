<template>
  <div>
    <ul class="list">
      <li
        class="list_li"
        v-for="item in data.messageList.slice(
          (paginationData.currentPage - 1) * paginationData.pageSize,
          paginationData.currentPage * paginationData.pageSize,
        )"
        :key="item.id"
      >
        <el-avatar :src="item.picUrl" shape="square" />
        <div class="list_li_content">
          <el-tooltip :content="item.title" placement="top">
            <div>{{ item.title }}</div>
          </el-tooltip>
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
});
</script>

<style scoped lang="less">
.pagination {
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
.el-avatar {
  background-color: transparent !important;
  margin-right: 16px;
}
</style>
