<template>
  <el-tabs
    v-model="activeName"
    type="card"
    closable
    @tab-click="handleTab"
    @tab-remove="removeTab"
  >
    <el-tab-pane
      v-for="item in tags"
      :key="item.path"
      :label="item.title"
      :name="item.path"
    />
  </el-tabs>
</template>

<script setup lang="ts" name="Tag">
import type { RouteLocationNormalizedLoaded } from 'vue-router';
import TagListStore, { type TagProps } from '@/stores/modules/Tag';

// route
const route = useRoute();
const router = useRouter();

// pinia
const tagStore = TagListStore();
const tags = computed<any>(() => {
  return tagStore.getTagList;
});

// 当前路由标签
const activeName = ref<string>('');
const setActiveTab: Function = () => (activeName.value = route.path);

// 添加标签
const addTab: Function = () => {
  const { path, name, meta, query }: RouteLocationNormalizedLoaded = route;
  const tab: TagProps = {
    path,
    name,
    query,
    title: meta.title as string,
  };
  tagStore.addTagList(tab);
};

// 点击标签
const handleTab: Function = (tab: any) => {
  const { name }: any = tab.props;
  router.push({ path: name as string });
};

// 关闭标签
const removeTab: Function = (tabName: string) => {
  if (
    (tagStore.tagList.length === 1 && activeName.value === '/home') ||
    tagStore.tagList.length === 1
  )
    return ElMessage.warning('这是最后一页！');

  const tabsLst: TagProps[] = tags.value;
  let active_Name: String = activeName.value;
  if (active_Name === tabName) {
    tabsLst.forEach((tab: TagProps, index: number) => {
      if (tab.path === tabName) {
        const nextTab: TagProps = tabsLst[index + 1] || tabsLst[index - 1];
        if (nextTab) {
          return (active_Name = nextTab.path);
        }
      }
    });
  }
  activeName.value = active_Name as string;
  tagStore.tagList = tabsLst.filter((tab: TagProps) => tab.path !== tabName);
  router.push({ path: active_Name as string });
};

watch(
  () => route.path,
  () => {
    setActiveTab();
    addTab();
  },
);

onMounted(() => {
  setActiveTab();
  tagStore.initialTagList(route);
});
</script>

<style scoped lang="less">
:deep(.el-tabs__header) {
  margin: 0px !important;
}
:deep(.el-tabs__item) {
  height: 26px !important;
  line-height: 26px !important;
  text-align: center !important;
  border: 1px solid #d8dce5 !important;
  margin: 8px 3px !important;
  font-size: 12px !important;
  padding: 0 10px !important;
}
:deep(.el-tabs__nav) {
  border: none !important;
}
:deep(.is-active) {
  border-bottom: 1px solid transparent !important;
  border: 1px solid #44c3ed !important;
  background-color: #44c3ed !important;
  color: #fff !important;
}
</style>
