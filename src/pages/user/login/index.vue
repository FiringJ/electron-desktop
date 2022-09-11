<script lang="ts" setup>
import { ref } from "vue";
import Logo from "~/assets/images/logo.png";

defineProps({
  msg: String,
});

const brandName = ref("Electron Desktop");
const brandTip = ref("electron-desktop是一款优秀的的即时交互软件");
const count = ref(0);
</script>

<template>
  <div class="brand-panel">
    <div class="brand-logo">
      <img class="brand-logo-img" :src="Logo" alt="" />
      <span class="brand-logo-title">{{ brandName }}</span>
    </div>
    <div class="brand-tip">{{ brandTip }}</div>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
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
