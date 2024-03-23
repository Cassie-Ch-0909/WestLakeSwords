<script setup>
import { defineProps } from 'vue'
import { useTwelveStore } from '@/stores/twelve.js'

/*
    封装12个模块的标题部分以实现多次复用的效果
*/
defineProps({
  title: String,
})

/*
    执行方法得到twelveStore对象
*/
const twelveStore = useTwelveStore()
function clickPersonalCenter() {
  twelveStore.changeTwelveFlagtoTrue()
  twelveStore.noActiveIndex()
}
</script>

<template>
  <div class="h50px w-full flex items-center bg-#fff">
    <p class="ml20px font-size-16px font-bold" @click="clickPersonalCenter()">
      个人中心
    </p>
    <p class="ml5px mr5px font-size-26px font-bold">
      >
    </p>
    <p class="color-#00B4BC font-bold">
      {{ title }}
    </p>
  </div>
</template>

<style scoped></style>
