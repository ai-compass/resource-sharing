<script setup lang="ts" name="About">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const activeNames = ref(["1"]);

const toKdocs = () => {
  router.push("/kdocs/update");
};
</script>

<template>
  <van-collapse v-model="activeNames">
    <van-collapse-item title="声明" name="1">
      <div class="text-[red]">
        所有资源均是无偿分享<br />
        仅供学习交流使用
      </div>
    </van-collapse-item>
    <van-collapse-item title="链接失效怎么办" name="2">
      私信我！
    </van-collapse-item>
    <van-collapse-item title="资源找不到怎么办" name="3">
      <div @click="toKdocs">私信我!!</div>
    </van-collapse-item>
  </van-collapse>
</template>
