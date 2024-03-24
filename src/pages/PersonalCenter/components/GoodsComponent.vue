<script setup>
import { defineProps } from 'vue'

/*
    封装一个组件用来存放商品信息
*/
defineProps({
  img: String,
  title: String,
  desc: String,
  num: Number,
  logo: String,
  method: String,
})
</script>

<template>
  <div class="mt10px h180px w-full flex bg-#fff shadow-xl">
    <div class="h-full w33% flex items-center justify-center">
      <img class="w-280px" :src="img">
    </div>
    <div class="relative h-full flex flex-1 flex-col pb10px pl20px pt10px pt15px">
      <p class="font-size-20px font-bold">
        {{ title }}
      </p>
      <p class="mt10px pr20px font-size-12px">
        {{ desc }}
      </p>
      <div class="absolute bottom-10px left-0 h45px w-full flex items-center justify-between pl20px pr20px">
        <span class="font-size-20px color-[#00B4BC] font-bold">{{ method }}{{ num }}</span>
        <img class="mb40px w-70px" :src="logo" alt="">
      </div>
    </div>
  </div>
</template>
