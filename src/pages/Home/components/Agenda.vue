<script setup>
// 流水轮播图
import WaterCarousel from './WaterCarousel.vue'
import AgendaStatistics from './AgendaStatistics.vue'
</script>

<template>
  <div class="md:ml10% md:mr10% md:h-[800px] md:w-80% md:flex md:items-center md:justify-between">
    <AgendaStatistics />
    <WaterCarousel class="animate__slideInRight animation-delay-1 wow h100% w67% animate-duration-2500" />
  </div>
</template>

<style scoped>
</style>
