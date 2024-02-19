<script setup>
import Carousel from '@/pages/Home/components/Carousel.vue'
import Agenda from '@/pages/Home/components/Agenda.vue'
</script>

<template>
  <!-- 轮播图模块 -->
  <Carousel />
  <Agenda v-animate-onscroll.repeat="{ down: 'swing' }" />
</template>

<style scoped lang="scss"></style>
