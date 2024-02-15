<script setup>
const carouselList = ref([
  'https://img2023.gcsis.cn/2023/4/3dd1997060ca4d8f95dc01e1e8be8b48.jpg',
  'https://img2023.gcsis.cn/2023/7/cf17e6301f9d4035ab0a3066333d5727.jpg',
  'https://img2023.gcsis.cn/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg',
  'https://img2023.gcsis.cn/2023/5/7422a25f996e4e17aa0e695c241de036.jpeg',
])
</script>

<template>
  <el-carousel height="780px">
    <el-carousel-item v-for="item in carouselList" :key="item">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped lang="scss">
</style>
