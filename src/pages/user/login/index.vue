<script lang="ts" setup>
import { ref } from "vue";
import Logo from "~/assets/images/logo.png";
import Alipay from "~/assets/images/alipay.png";
import Wechat from "~/assets/images/wechat.png";

defineProps({
  msg: String,
});

const brandName = ref("Electron Desktop");
const brandTip = ref("electron-desktop 是一款优秀的的即时交互软件");
const count = ref(0);

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  activeIndex.value = key[0];
};

/* 账号密码登录 */
const account = ref("");
const password = ref("");
const telephone = ref("");
const vcode = ref("");

const autoLogin = ref(false);
</script>

<template>
  <div class="brand-panel">
    <div class="brand-logo">
      <img class="brand-logo-img" :src="Logo" alt="" />
      <span class="brand-logo-title">{{ brandName }}</span>
    </div>
    <div class="brand-tip">{{ brandTip }}</div>
  </div>

  <div class="mx-[150px]">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">账号密码登录</el-menu-item>
      <el-menu-item index="2">手机号登录</el-menu-item>
    </el-menu>
    <div v-if="activeIndex === '1'">
      <el-input class="mt-[5px]" v-model="account" placeholder="账户" />
      <el-input class="mt-[5px]" v-model="password" placeholder="密码" />
    </div>
    <div v-if="activeIndex === '2'">
      <el-input class="mt-[5px]" v-model="telephone" placeholder="手机号" />
      <el-input class="mt-[5px]" v-model="vcode" placeholder="验证码" />
    </div>

    <div class="flex w-full justify-between items-center">
      <el-checkbox v-model="autoLogin" label="自动登录" size="large" />
      <div class="text-blue-400 text-[14px] leading-[22px]">忘记密码</div>
    </div>

    <el-button type="primary" class="w-full mt-[10px]">登录</el-button>

    <div class="w-full flex justify-start items-center mt-[12px]">
      <span class="text-[14px] leading-[22px] text-[#606266]"
        >其他登录方式</span
      >
      <img :src="Alipay" alt="" class="ml-[8px] w-[24px] h-[24px]" />
      <img :src="Wechat" alt="" class="ml-[4px] w-[24px] h-[24px]" />
      <div
        class="flex-1 text-right text-blue-400 text-[14px] leading-[22px] text-[#606266]"
      >
        注册账户
      </div>
    </div>

    <div
      class="w-screen fixed bottom-[20px] flex justify-center text-[14px] leading-[22px] text-gray-500 text-center"
    >
      Copyright @ 2022 FiringJ
    </div>
  </div>
</template>

<style lang="scss" scoped>
.brand-panel {
  @apply flex flex-col justify-center items-center;
}
.brand-logo {
  @apply flex justify-between;
}
.brand-logo-img {
  @apply w-[45px] h-[45px];
}
.brand-logo-title {
  @apply text-[24px] leading-[33px] font-medium text-black;
}
.brand-tip {
  @apply text-base text-[#999999];
}
</style>
