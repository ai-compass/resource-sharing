<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { showToast } from "vant";

const form = ref({ type: "", text: "", password: "" });
const type = ref("");
const showPicker = ref(false);

const typeList = [
  {
    text: "美剧",
    value:
      "https://www.kdocs.cn/api/v3/office/async_job/webhook/e5a7b07950fd471f51e7c95248e3bc30"
  },
  {
    text: "电影",
    value:
      "https://www.kdocs.cn/api/v3/office/async_job/webhook/37d98546ad464d4a6b00598db659f83f"
  }
];

const onSubmit = () => {
  const { type, text, password } = form.value;

  const { name, link } = extractNameAndLink(text);

  console.log("submit", type, name, link);
  axios
    .post("http://121.40.201.86:3000/kdocs/update", {
      type,
      name,
      link,
      password
    })
    .then(res => {
      console.log(res);
      const { code, message } = res.data;
      if (code === 200) {
        showToast("提交成功");
      } else {
        showToast(message);
      }
    });
};

const onConfirm = ({ selectedOptions }) => {
  type.value = selectedOptions[0]?.text;
  form.value.type = selectedOptions[0]?.value;
  showPicker.value = false;
};

function extractNameAndLink(text) {
  // 匹配名称：被「」包围的内容
  const nameRegex = /「(.*?)」/;
  // 匹配链接：以 http 或 https 开头的URL
  const linkRegex = /https?:\/\/[^\s]+/;

  const nameMatch = text.match(nameRegex);
  const linkMatch = text.match(linkRegex);

  const name = nameMatch ? nameMatch[1] : null;
  const link = linkMatch ? linkMatch[0] : null;

  return { name, link };
}
</script>

<template>
  <van-form label-width="40px" @submit="onSubmit">
    <van-field
      v-model="type"
      is-link
      readonly
      name="type"
      label="类型"
      :rules="[{ required: true, message: '请选择类型' }]"
      placeholder="请选择类型"
      @click="showPicker = true"
    />
    <van-popup v-model:show="showPicker" position="bottom">
      <van-picker
        :columns="typeList"
        @confirm="onConfirm"
        @cancel="showPicker = false"
      />
    </van-popup>

    <van-field
      v-model="form.text"
      type="textarea"
      autosize
      name="name"
      label="内容"
      placeholder="请填写内容"
      :rules="[{ required: true, message: '请填写内容' }]"
    />

    <!-- <van-field
      v-model="form.name"
      name="name"
      label="剧名"
      placeholder="请填写剧名"
      :rules="[{ required: true, message: '请填写剧名' }]"
    />

    <van-field
      v-model="form.link"
      name="link"
      label="链接"
      placeholder="请填写链接"
      :rules="[{ required: true, message: '请填写链接' }]"
    /> -->

    <van-field
      v-model="form.password"
      name="password"
      label="密码"
      placeholder="请填写密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />

    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>
</template>

<style scoped></style>
