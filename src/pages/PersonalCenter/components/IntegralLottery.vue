<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import Canvas from './Canvas.vue'
import CanvasRadius from './CanvasRadius.vue'
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="积分抽奖" />
    <div class="relative h650px w-full">
      <div class="absolute left-0px flex pt40px font-size-25px color-red font-bold">
        <p class="ml70px shadow-2xl">
          每位用户每日仅限抽奖一次
        </p>
        <p class="ml215px shadow-2xl">
          500积分可抽一次
        </p>
      </div>
      <div class="ml25px h-full w-full flex items-center justify-evenly">
        <Canvas />
        <CanvasRadius />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
