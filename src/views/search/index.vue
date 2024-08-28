<script setup lang="ts" name="Search">
import { ref, reactive } from "vue";

import series from "@/json/series.json";

interface SeriesItem {
  name: string;
  link: string;
}

interface Series {
  [key: string]: SeriesItem[];
}

let list = ref<Series>(series);
let search = ref("");

const onSearch = () => {
  let l = [];
  for (let k in series) {
    l = [...l, ...series[k]];
  }
  if (!search.value) {
    list.value = series;
  } else {
    list.value = {
      搜索结果: l.filter(item =>
        item.name.includes(search.value)
      ) as SeriesItem[]
    } as Series;
  }
};
</script>

<template>
  <van-notice-bar
    :scrollable="false"
    text="输入关键字搜索，如唐顿庄园可搜索：唐、顿、庄、园、唐顿..."
  />
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="点击任意剧名，即可前往保存"
  />
  <form action="/">
    <van-search
      v-model="search"
      placeholder="请输入搜索美剧关键词"
      @search="onSearch"
    />
  </form>
  <van-index-bar :sticky-offset-top="46">
    <template v-for="(v, k) in list" :key="k">
      <van-index-anchor :index="k" />

      <van-cell v-for="l in v" :key="l.link" :url="l.link" is-link>
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <van-text-ellipsis :content="l.name" />
        </template>
      </van-cell>
    </template>
  </van-index-bar>
</template>

<style scoped></style>
