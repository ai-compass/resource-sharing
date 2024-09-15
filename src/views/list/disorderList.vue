<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useNavTitleStore } from "@/store/modules/navTitle";
import type { Item, List } from "@/typings/list";
const route = useRoute();
const router = useRouter();
const { type, from, name } = route.params;

useNavTitleStore().setNavTitle(name as string);

let list = ref<Item[]>();

onMounted(async () => {
  list.value = (await import(`@/json/${type}/${from}_${type}.json`))
    .default as Item[];
});

const onLinkQuarkCourse = () => {
  router.push("/detail/quark-course");
};
</script>

<template>
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="🔥 免费领取夸克网盘1TB空间，夸克每天领取容量教程"
    color="red"
    @click="onLinkQuarkCourse"
  />
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="点击任意内容，即可前往保存"
  />
  <van-notice-bar wrapable :scrollable="false" text="更新中..." />
  <van-cell
    v-for="l in list"
    :key="l.link"
    :title="l.name"
    is-link
    :url="l.link"
  />
</template>

<style scoped></style>
