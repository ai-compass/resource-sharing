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
  }
];

const onClickItem = item => {
  console.log(item);
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

  <!-- <van-notice-bar
    :scrollable="false"
    text="找到喜欢的剧 然后保存后观看，不然只能看2分钟，看那个保存那个"
  />
  <van-notice-bar
    wrapable
    :scrollable="false"
    text="点击任意剧名，即可前往保存"
  />
  <van-cell
    v-for="l in list"
    :key="l.link"
    :title="l.name"
    is-link
    :url="l.link"
  />
  <div
    class="text-[length:var(--van-font-size-md)] px-[var(--van-cell-horizontal-padding)]"
  >
    1.
    一定记得先保存在观看，不然就是试看两分钟，开始存不下就一集一集保存，观看后即可获取超大空<br />
    2.
    文件画质都是全网最高画质，想看高画质直接保存长按视频下载原画质即可下载不限速

    <div class="text-[red]">
      找到喜欢的剧 然后保存后观看，不然只能看2分钟，看那个保存那个
    </div>
  </div> -->
</template>

<style scoped></style>
