<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'

/*
    定义一个变量pptActiveIndex
*/
const pptActiveIndex = ref(0)

/*
    定义一个方法来控制pptActiveIndex的值
*/
function pptActiveIndexAdd1(index) {
  pptActiveIndex.value = index + 1
}
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="趣味活动" />
    <!-- 开始答题 -->
    <div
      v-show="pptActiveIndex === 0"
      class="bg h580px w-full flex flex-col items-center bg-contain bg-left bg-no-repeat"
    >
      <p class="mt15% font-size-50px font-bold">
        西湖论剑·网络安全知识竞赛
      </p>
      <button class="mt15% h8% w-15% rounded-10px bg-#2B7BBB color-#fff shadow-2xl" @click="pptActiveIndexAdd1(0)">
        开始答题
      </button>
    </div>
    <div
      v-show="pptActiveIndex === 1"
      class="bg2 h520px w-full flex flex-col items-center bg-contain bg-left bg-no-repeat"
    >
      fdfd
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/answer/1.jpg');
}

.bg2 {
  background-image: url('/public/answer/8.jpg');
}
</style>
