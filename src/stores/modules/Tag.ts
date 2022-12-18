import type {
  RouteLocationNormalized,
  RouteLocationRaw,
  RouteRecordName,
  RouteMeta,
} from 'vue-router';
import { defineStore } from 'pinia';

export interface TagProps {
  title?: string;
  name: string | RouteRecordName | null | undefined;
  fullPath?: string;
  path: string;
  query?: any;
  meta?: RouteMeta;
}

interface TagList {
  tagList: TagProps[];
  lastDragEndIndex: number;
}

const formatTag = (route: RouteLocationNormalized): TagProps => {
  const { name, meta, fullPath, query, path, title }: TagProps = route;

  return {
    title: (title || meta.title) as string,
    name: String(name),
    path,
    fullPath,
    query,
  };
};

const TagListStore: Function = defineStore('tagList', {
  state: (): TagList => ({
    tagList: [],
    lastDragEndIndex: 0,
  }),

  getters: {
    getTagList(): RouteLocationRaw[] {
      return this.tagList;
    },
  },

  actions: {
    initialTagList(route: RouteLocationNormalized): void {
      this.tagList = [];
      this.tagList.push(formatTag(route) as unknown as TagProps);
    },

    addTagList(route: RouteLocationNormalized): void {
      if (this.tagList.some((item: TagProps) => item.name === route.name))
        return;
      this.tagList.push(formatTag(route) as unknown as TagProps);
    },
  },
});

export default TagListStore;
