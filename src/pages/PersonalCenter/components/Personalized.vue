<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import ShakeButton from './ShakeButton.vue'
</script>

<template>
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="个性化定制" />
    <div class="bg relative h500px w-full bg-auto bg-left bg-no-repeat">
      <img src="https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg">
      <p class="absolute left-300px top-120px font-size-50px color-#fff font-bold">
        西湖论剑@数字安全
      </p>
      <ShakeButton class="absolute left-370px top-280px" />
    </div>
  </div>
</template>

<style scoped>

</style>
