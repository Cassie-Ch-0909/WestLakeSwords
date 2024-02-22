<script setup>
import Carousel from '@/pages/Home/components/Carousel.vue'
import Agenda from '@/pages/Home/components/Agenda.vue'
import Highlights from '@/pages/Home/components/Highlights.vue'
</script>

<template>
  <!-- 轮播图模块 -->
  <Carousel />
  <!-- FIXME 大会议程模块 这个指令来源不明
  v-animate-onscroll.repeat="{ down: 'swing' }"我感觉这个可以去掉
  -->
  <Agenda />
  <!-- 大会亮点模块 -->
  <Highlights />
</template>

<style scoped lang="scss"></style>
