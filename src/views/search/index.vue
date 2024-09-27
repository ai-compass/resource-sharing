<script setup lang="ts" name="Search">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { Item, List } from "@/typings/list";

import en_series from "@/json/series/en_series.json";
import zh_series from "@/json/series/zh_series.json";
import en_movie from "@/json/movie/en_movie.json";
import zh_movie from "@/json/movie/zh_movie.json";
import pc_soft from "@/json/soft/pc_soft.json";

import { mergeJSON } from "@/utils/merge-list-json";

const router = useRouter();

const list_json = mergeJSON([
  en_series,
  zh_series,
  en_movie,
  zh_movie,
  pc_soft
]);

console.log("list_json", list_json);

const special_list: List = {
  整合内容: [
    {
      color: "red",
      name: "🔥玛丽苏系列",
      link: "https://pan.quark.cn/s/6dd2fcb6d021"
    },
    {
      color: "red",
      name: "🔞疼痛的爱系列",
      link: "/detail/bdsm"
      // link: "https://pan.quark.cn/s/9d1d0c178d27"
    },
    {
      name: "👉 更多系列",
      link: "/detail/disorder-list/all/collection/整合区|合集"
    }
  ]
};

let list = ref<List>({ ...special_list, ...list_json });
let search = ref("");

const onSearch = () => {
  let l = [];
  for (let k in list_json) {
    l = [...l, ...list_json[k]];
  }
  if (!search.value) {
    list.value = { ...special_list, ...list_json };
  } else {
    list.value = {
      ...special_list,
      搜索结果: l.filter(item =>
        item.name.toLowerCase().includes(search.value.toLowerCase())
      ) as Item[]
    } as List;
  }
};

const onLinkQuarkCourse = () => {
  router.push("/detail/quark-course");
};

const onLink = (name: string, link: string) => {
  console.log(name, link);
  if (link.startsWith("http")) {
    window.open(link);
  } else {
    router.push(link);
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
    text="点击任意内容，即可前往保存"
  />
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="🔥 免费领取夸克网盘1TB空间，夸克每天领取容量教程"
    color="red"
    @click="onLinkQuarkCourse"
  />
  <form action="/">
    <van-search
      v-model="search"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />
  </form>
  <van-index-bar :sticky-offset-top="46">
    <template v-for="(v, k) in list" :key="k">
      <van-index-anchor :index="k" />

      <van-cell
        v-for="l in v"
        :key="l.link"
        is-link
        target="_blank"
        @click="onLink(l.name, l.link)"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          <span :style="{ color: l.color || '' }">{{ l.name }}</span>

          <!-- <van-text-ellipsis :content="" /> -->
        </template>
      </van-cell>
    </template>
  </van-index-bar>
  <van-back-top :bottom="55" :right="20" />
</template>

<style scoped></style>
