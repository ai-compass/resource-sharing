<script setup lang="ts">
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
    name: "宫女扶摇录",
    link: "https://pan.quark.cn/s/723ebedbacfb"
  },
  {
    name: "庆余年",
    link: "https://pan.quark.cn/s/e79005e86a73"
  }
];
</script>

<template>
  <van-notice-bar
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
  </div>
</template>

<style scoped></style>
