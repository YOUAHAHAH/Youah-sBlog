<template>
  <el-pagination
    :current-page="data.currentPage"
    :page-size="data.pageSize"
    :page-sizes="data.pageSizeArray"
    :small="data.small"
    :disabled="data.disabled"
    :background="data.background"
    :total="data.total"
    :layout="data.layoutArray.join()"
    :hide-on-single-page="data.hideOnSinglePage"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  />
</template>

<!-- <Pagination
class="pagination"
:Total="paginationData.total"
:BackGround="paginationData.background"
:PageSize="paginationData.pageSize"
:CurrentPage="paginationData.currentPage"
:Small="paginationData.small"
:Disabled="paginationData.disabled"
:PageSizeArray="paginationData.pageSizeArray"
:LayoutArray="paginationData.layoutArray"
@handleSizeChange="handleSizeChange"
@handleCurrentChange="handleCurrentChange"
></Pagination> -->

<script setup lang="ts">
interface Props {
  Total?: number;
  BackGround?: boolean;
  PageSize?: number;
  CurrentPage?: number;
  Small?: boolean;
  Disabled?: boolean;
  PageSizeArray?: number[];
  LayoutArray?: string[];
  HideOnSinglePage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  Total: () => {
    return 10;
  },
  BackGround: () => {
    return false;
  },
  PageSize: () => {
    return 5;
  },
  CurrentPage: () => {
    return 1;
  },
  Small: () => {
    return false;
  },
  Disabled: () => {
    return false;
  },
  PageSizeArray: () => {
    return [10, 20, 50, 100];
  },
  LayoutArray: () => {
    return ['total', 'sizes', 'prev', 'pager', 'next', 'jumper'];
  },
  HideOnSinglePage: () => {
    return false;
  },
});

let {
  Total,
  BackGround,
  PageSize,
  CurrentPage,
  Small,
  Disabled,
  PageSizeArray,
  LayoutArray,
  HideOnSinglePage,
} = props;

const data = reactive({
  total: Total,
  background: BackGround,
  pageSize: PageSize,
  currentPage: CurrentPage,
  small: Small,
  disabled: Disabled,
  pageSizeArray: PageSizeArray,
  layoutArray: LayoutArray,
  hideOnSinglePage: HideOnSinglePage,
});

const emit = defineEmits(['handleSizeChange', 'handleCurrentChange']);

const handleSizeChange = async (val: number) => {
  emit('handleSizeChange', val);
  data.pageSize = val;
};

const handleCurrentChange = async (val: number) => {
  emit('handleCurrentChange', val);
  data.currentPage = val;
};
</script>

<style scoped></style>
