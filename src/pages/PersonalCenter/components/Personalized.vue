<script setup>
import { ref } from 'vue'
import Vcode from 'vue3-puzzle-vcode'
import MoudleHeader from './MoudleHeader.vue'
import ShakeButton from './ShakeButton.vue'
import Img1 from '/public/activity/1.webp'
import Img2 from '/public/activity/2.webp'
import Html2canvas from './Html2canvas.vue'

/*
    定义一个变量用来控制step1和stpe3的页面展示
*/
const activeIndex = ref(0)

const imgs = [Img1, Img2]
const isShow = ref(false)

function onShow() {
  isShow.value = true
}

function onClose() {
  isShow.value = false
}

function onSuccess() {
  onClose() // 验证成功，需要手动关闭模态框
  activeIndex.value = 1
}
</script>

<template>
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="个性化定制" />
    <!-- step1 -->
    <div v-show="activeIndex === 0" class="bg relative h500px w-full bg-auto bg-left bg-no-repeat">
      <img src="https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg">
      <p class="absolute left-300px top-120px font-size-50px color-#fff font-bold">
        西湖论剑@数字安全
      </p>
      <ShakeButton class="absolute left-370px top-280px" @click="onShow" />
      <Vcode :show="isShow" :imgs="imgs" class="absolute left-600px top-400px" @success="onSuccess" @close="onClose" />
    </div>
    <!-- step3 -->
    <div v-show="activeIndex === 1">
      <Html2canvas />
    </div>
  </div>
</template>

<style scoped></style>
