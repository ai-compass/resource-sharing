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
        id: 1.3,
        from: "剧集区",
        text: "短剧",
        link: "/detail/list/series/short"
      },
      {
        id: 1.1,
        from: "剧集区",
        text: "国产",
        link: "/detail/list/series/zh"
      },
      {
        id: 1.2,
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
        id: 2.1,
        from: "电影区",
        text: "国产",
        link: "/detail/list/movie/zh"
      },
      {
        id: 2.2,
        from: "电影区",
        text: "美国",
        // link: "/detail/list/movie/en"
        link: "https://pan.quark.cn/s/94a36f5c74e6"
      },
      {
        id: 2.3,
        from: "电影区",
        text: "系列作品",
        link: "https://pan.quark.cn/s/6cb02baa39f5"
      },
      {
        id: 2.4,
        from: "电影区",
        text: "玛丽苏合集",
        link: "https://pan.quark.cn/s/6dd2fcb6d021"
      },
      {
        id: 2.5,
        from: "电影区",
        text: "🔞疼痛的爱系列",
        link: "https://ai-compass.github.io/resource-sharing/#/detail/bdsm"
      },
      {
        id: 2.6,
        from: "电影区",
        text: "欧美大尺度系列",
        link: "https://pan.quark.cn/s/3130f810982c"
      },
      {
        id: 2.7,
        from: "电影区",
        text: "为艺术献身作品",
        link: "https://pan.quark.cn/s/319e152026b8"
      },
      {
        id: 2.8,
        from: "电影区",
        text: "豆瓣 TOP250",
        link: "https://pan.quark.cn/s/1bbfb6676b01"
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
        link: "https://pan.quark.cn/s/957838f63ac6"
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
