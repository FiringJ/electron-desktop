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

/* 为true时显示登录面板，否则显示注册面板 */
const isLogin = ref(true);

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  activeIndex.value = key[0];
};

const activeRegisterIndex = ref("1");
const handleRegisterSelect = (key: string, keyPath: string[]) => {
  activeRegisterIndex.value = key[0];
};

/* 账号密码登录 */
const account = ref("");
const password = ref("");
const telephone = ref("");
const vcode = ref("");

const autoLogin = ref(false);

const toLogin = () => {
  isLogin.value = true;
};

/* 注册账号 */
const emailAccount = ref("");
const registerPassword = ref("");
const registerPasswordCheck = ref("");
const registerTelephone = ref("");
const registerVcode = ref("");
const toRegister = () => {
  isLogin.value = false;
};

/* 获取验证码 */
const getVCode = () => {};
</script>

<template>
  <!-- 顶部的LOGO -->
  <div class="brand-panel">
    <div class="brand-logo">
      <img class="brand-logo-img" :src="Logo" alt="" />
      <span class="brand-logo-title">{{ brandName }}</span>
    </div>
    <div class="brand-tip">{{ brandTip }}</div>
  </div>

  <!-- 登录面板 -->
  <div v-if="isLogin" class="mx-[150px]">
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
      <div class="flex mt-[5px]">
        <el-input v-model="vcode" placeholder="验证码" />
        <el-button class="ml-[5px]">获取验证码</el-button>
      </div>
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
        class="flex-1 text-right text-blue-400 text-[14px] leading-[22px]"
        @click="toRegister"
      >
        注册账户
      </div>
    </div>
  </div>

  <!-- 注册面板 -->
  <div v-else class="mx-[150px]">
    <el-menu
      :default-active="activeRegisterIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleRegisterSelect"
    >
      <el-menu-item index="1">邮箱注册</el-menu-item>
      <el-menu-item index="2">手机号注册</el-menu-item>
    </el-menu>
    <div v-if="activeRegisterIndex === '1'">
      <el-input class="mt-[5px]" v-model="emailAccount" placeholder="邮箱" />
      <el-input
        class="mt-[5px]"
        v-model="registerPassword"
        placeholder="密码"
      />
      <el-input
        class="mt-[5px]"
        v-model="registerPasswordCheck"
        placeholder="确认密码"
      />
    </div>
    <div v-if="activeRegisterIndex === '2'">
      <el-input
        class="mt-[5px]"
        v-model="registerTelephone"
        placeholder="手机号"
      />
      <div class="flex mt-[5px]">
        <el-input v-model="registerVcode" placeholder="验证码" />
        <el-button class="ml-[5px]">获取验证码</el-button>
      </div>
    </div>
    <el-button type="primary" class="w-full mt-[10px]">注册</el-button>
    <div
      class="flex-1 text-right text-blue-400 text-[14px] leading-[22px] mt-[3px]"
      @click="toLogin"
    >
      使用已有账号登录
    </div>
  </div>

  <div
    class="w-screen fixed bottom-[20px] flex justify-center text-[14px] leading-[22px] text-gray-500 text-center"
  >
    Copyright @ 2022 FiringJ
  </div>
</template>

<style lang="scss" scoped>
.brand-panel {
  @apply flex flex-col justify-center items-center;
}
.brand-logo {
  @apply flex justify-between items-center;
}
.brand-logo-img {
  @apply w-[45px] h-[45px];
}
.brand-logo-title {
  @apply ml-[10px] text-[33px] leading-[45px] font-medium text-black;
}
.brand-tip {
  @apply text-sm mt-[12px] text-[#999999];
}
</style>
