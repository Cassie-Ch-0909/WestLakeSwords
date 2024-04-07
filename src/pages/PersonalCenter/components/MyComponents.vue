<script setup>
import { defineProps } from 'vue'

/*
    封装一个组件用来存放大会议程的议程信息 到时候 订阅 点赞 收藏 都可以复用
*/
defineProps({
  img: String,
  title: String,
  type: String,
  time: String,
})
</script>

<template>
  <div class="mt15px pb20px pl20px">
    <div class="w209px">
      <img class="h130px w-full" :src="img" alt="">
      <div class="bg-#fff shadow-lg">
        <div class="ellipsis h40px w-full flex items-center pt5px font-size-13px">
          {{ title }}
        </div>
        <div class="h40px w-full flex justify-between">
          <div class="mt10px h20px rounded-5px bg-#00B4C2 pl10px pr10px font-size-12px color-#ff color-#fff">
            {{ type }}
          </div>
          <p class="ml10px mt10px flex flex-1 justify-end pr10px font-size-13px">
            {{ time }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  height: 20px;
  text-overflow: ellipsis;
}
</style>
