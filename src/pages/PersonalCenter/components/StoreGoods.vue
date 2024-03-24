<script setup>
import { defineProps, ref } from 'vue'
import MagnifyingGlass from './MagnifyingGlass.vue'

/*
    封装一个组件用来存放商品信息
*/
defineProps({
  // img: String,
  // title: String,
  // desc: String,
  // num: Number,
  // logo: String,
  // method: String,
})
const dialogTableVisible = ref(false)
</script>

<template>
  <div class="mt10px w-full flex justify-evenly">
    <div class="w280px flex flex-col items-center bg-#fff shadow-xl">
      <img
        class="w-full"
        src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg"
      >
      <p class="pb10px pt10px font-size-16px font-bold">
        2021年成都大运会赛事门票
      </p>
      <div class="w-full flex font-size-15px color-[#00B4BC]">
        <span class="ml50px font-bold">￥2000</span>
        <button class="ml30px w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff" @click="dialogTableVisible = true">
          去购买
        </button>
      </div>
      <div class="mt10px w-full flex pb10px font-size-15px">
        <span class="ml20px font-bold">兑换：2000</span>
        <button class="ml30px w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff" @click="dialogTableVisible = true">
          去兑换
        </button>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" width="1200">
    <MagnifyingGlass img="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg" />
  </el-dialog>
</template>
