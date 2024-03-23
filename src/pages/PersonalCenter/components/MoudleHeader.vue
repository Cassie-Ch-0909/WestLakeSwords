<script setup>
import { defineEmits, defineProps } from 'vue'

/*
    封装12个模块的标题部分以实现多次复用的效果
*/
defineProps({
  title: String,
})

// /*
//     子传父控制12个模块区域的显示
// */
// const emit = defineEmits(['gotoTwelveMoudles'])
// function gotoTwelveMoudles(flag) {
//   emit('gotoTwelveMoudles', flag)
// }
</script>

<template>
  <div class="full h50px flex items-center">
    <p class="ml20px font-size-16px font-bold">
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
