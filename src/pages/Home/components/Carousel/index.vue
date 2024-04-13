<script setup>
import BoxReflect from '@/pages/Home/components/Carousel/BoxReflect.vue'

// 定义一个轮播图数组
const carouselList = ref([
  'https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg',
  'https://img2023.gcsis.cn/2023/7/cf17e6301f9d4035ab0a3066333d5727.jpg',
  'https://img2023.gcsis.cn/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg',
  'https://img2023.gcsis.cn/2023/5/7422a25f996e4e17aa0e695c241de036.jpeg',
])
</script>

<template>
  <el-carousel height="780px" class="h-[200px] w-full md:h-[780px]">
    <!-- 轮播图的每一项 -->
    <el-carousel-item
      v-for="(item, index) in carouselList"
      :key="index"
      class="h-[200px] w-full md:h-[780px]"
      :class="index === 0 ? 'relative' : ''"
    >
      <!-- 数字安全@数字中国 -->
      <img
        src="@/assets/el-carouse/2.webp"
        alt=""
        class="animate__animated animate__flipInX animate__slow absolute left-22% top-20% w-60%"
        :class="index !== 0 ? 'hidden' : ''"
      >
      <!-- 每一张图片 -->
      <img :src="item" alt="" class="h-[200px] w-full md:h-[780px]">
      <!-- button -->
      <BoxReflect
        class="animate__animated animate__flipInX animate__delay-1s absolute md:left-2.5% md:top-30%"
        :class="index !== 0 ? 'hidden' : ''"
      />
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss"></style>
