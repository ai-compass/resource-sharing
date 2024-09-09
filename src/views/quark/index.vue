<script setup lang="ts">
const onToQuark = () => {
  window.open("https://pan.quark.cn/s/69ebae38e377");
};
</script>

<template>
  <div class="p-4">
    <h1 class="text-[24px] font-bold">夸克网盘“每天领容量”方法指南</h1>

    <div class="text-lg my-[10px]">1. 新用户注册第一天领取1T容量</div>
    <div class="my-[5px]">
      新用户，用手机在你的手机软件商店下载夸克app，然后保存我分享的任意一个文件，即可领取1T容量；
      <br />
      <span class="text-[red]">
        注意，必须是用手机，用电脑领不到容量（可以用手机领了之后再电脑上使用）。
      </span>
    </div>
    <div class="text-lg my-[10px]">
      手机注册并转存此文件，即可免费领取1TB，第二天签到继续领取空间！长期有效
    </div>
    <div class="text-[red] my-[5px]">
      转存领取1T容量专属链接，点击就能跳转到转存页面，直接转存即可！
      <div
        class="animate-scale m-[10px] p-[10px] bg-[#f5f5f5] border-[1px] border-[#ccc]"
        @click="onToQuark"
      >
        转存领取1T容量专属链接
        <a
          class="text-[#234cee]"
          href="https://pan.quark.cn/s/69ebae38e377"
          target="_blank"
        >
          https://pan.quark.cn/s/69ebae38e377
        </a>
      </div>
    </div>
    <div class="my-[5px]"><img src="./saved.jpg" /></div>
    <div class="text-lg my-[10px]">2. 如何持续领容量</div>
    <div class="my-[5px]">
      第二天，你继续登录夸克网盘可以继续领容量，以后每天登录每天领，还会翻倍，而且是永久容量，第七天免费领取1024MB！
    </div>
    <div class="my-[5px]"><img src="./step_get.jpg" /></div>
    <div class="text-lg my-[10px]">3. 夸克网盘缺点</div>
    <div class="text-[red] my-[5px]">
      夸克网盘唯一缺点是，和百度网盘一样，不买会员存个文件慢得像蜗牛，买了会员快得像火箭!
    </div>
    <div class="text-[red] font-bold my-[5px]">
      我个人体验，夸克网盘的客户端比百度网盘好用，会员转存下载移动文件等操作都比百度网盘快
    </div>
  </div>
</template>

<style scoped>
@keyframes scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
.animate-scale {
  animation: scale 2s ease-in-out infinite;
}
</style>
