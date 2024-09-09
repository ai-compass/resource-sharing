<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNavTitleStore } from "@/store/modules/navTitle";
import type { Item, List } from "@/typings/list";
const route = useRoute();
const router = useRouter();
const { type, from, name } = route.params;

useNavTitleStore().setNavTitle(name as string);

let list = ref<List>();
let search = ref("");
let series: List;

onMounted(async () => {
  series = (await import(`@/json/${type}/${from}_${type}.json`))
    .default as List;
  list.value = series;
});

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
        item.name.toLowerCase().includes(search.value.toLowerCase())
      ) as Item[]
    } as List;
  }
};

const onLinkQuarkCourse = () => {
  router.push("/detail/quark-course");
};
</script>

<template>
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="👉 免费领取夸克网盘1TB空间，夸克每天领取容量教程"
    color="red"
    @click="onLinkQuarkCourse"
  />
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="点击任意内容，即可前往保存"
  />
  <van-notice-bar wrapable :scrollable="false" text="更新中..." />
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
        :url="l.link"
        is-link
        target="_blank"
      >
        <!-- 使用 title 插槽来自定义标题 -->
        <template #title>
          {{ l.name }}
          <!-- <van-text-ellipsis :content="" /> -->
        </template>
      </van-cell>
    </template>
  </van-index-bar>
</template>

<style scoped></style>
