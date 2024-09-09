<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";
import { useNavTitleStore } from "@/store/modules/navTitle";

const router = useRouter();

const onClickRight = (event: TouchEvent | MouseEvent) => {
  useToggleDarkMode(event);
};

const onClickLeft = () => {
  router.back();
};

const navTitle = computed(() => useNavTitleStore().navTitle);
</script>

<template>
  <van-nav-bar
    fixed
    placeholder
    @click-left="onClickLeft"
    @click-right="onClickRight"
  >
    <template #left>
      <svg-icon
        class="text-[18px]"
        name="back"
        :style="{ color: useDarkMode() ? '#fff' : '#000' }"
      />
    </template>
    <template #title> {{ navTitle }} </template>
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
