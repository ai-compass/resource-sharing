<script setup lang="ts">
import router from "@/router";
import { ref } from "vue";
const activeIndex = ref(0);

const list = [
  {
    name: "全部资源",
    link: "https://pan.quark.cn/s/e7989a237804"
  },
  {
    name: "国产剧合集",
    link: "https://pan.quark.cn/s/27170c2532cf"
  },
  {
    name: "韩剧集合",
    link: "https://pan.quark.cn/s/26fdffc7c3df"
  },
  {
    name: "闪婚老伴是豪门",
    link: "https://pan.quark.cn/s/0c6640f8daa7"
  },
  {
    name: "藏海花",
    link: "https://pan.quark.cn/s/4dca87228878"
  },
  {
    name: "宫女扶摇录",
    link: "https://pan.quark.cn/s/723ebedbacfb"
  },
  {
    name: "庆余年",
    link: "https://pan.quark.cn/s/e79005e86a73"
  }
];

const link = [
  {
    text: "剧集区",
    children: [
      {
        id: 1,
        from: "剧集区",
        text: "国产",
        link: "/detail/list/series/zh"
      },
      {
        id: 2,
        from: "剧集区",
        text: "美国",
        link: "/detail/list/series/en"
      }
    ]
  },
  {
    text: "电影区",
    children: [
      {
        id: 3,
        from: "电影区",
        text: "国产",
        link: "/detail/list/movie/zh"
      },
      {
        id: 4,
        from: "电影区",
        text: "美国",
        link: "/detail/list/movie/en"
      }
    ]
  },
  {
    text: "软件区",
    children: [
      {
        id: 5,
        from: "软件区",
        text: "电脑",
        link: "/detail/list/soft/pc"
      },
      {
        id: 6,
        from: "软件区",
        text: "手机",
        link: "/detail/list/soft/phone"
      }
    ]
  },
  {
    text: "书籍区",
    children: [
      {
        id: 7,
        from: "书籍区",
        text: "有声书",
        link: "https://pan.quark.cn/s/55840118be3f"
      },
      {
        id: 8,
        from: "书籍区",
        text: "电子书",
        link: "https://pan.quark.cn/s/d92d47caaebb"
      }
    ]
  },
  {
    text: "其他区",
    children: [
      {
        id: 9,
        from: "其他区",
        text: "动态壁纸",
        link: "https://pan.quark.cn/s/71056a75dc66"
      }
    ]
  }
];

const onClickItem = item => {
  if (item.link.includes("https")) return window.open(item.link);
  router.push(`${item.link}/${item.from}|${item.text}`);
};
</script>

<template>
  <van-tree-select
    v-model:main-active-index="activeIndex"
    style="height: calc(100vh - var(--van-nav-bar-height) - var(--van-tabbar-height)"
    :items="link"
    @click-item="onClickItem"
  />
</template>

<style scoped></style>
