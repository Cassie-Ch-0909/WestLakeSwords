<script setup>
import Carousel from '@/pages/Home/components/Carousel/index.vue'
import Agenda from '@/pages/Home/components/Agenda/index.vue'
import Highlights from '@/pages/Home/components/Highlights/index.vue'
import ExcitingActivities from '@/pages/Home/components/ExcitingActivities/index.vue'
import ImportantGuests from '@/pages/Home/components/ImportantGuests/index.vue'
import NewsReport from '@/pages/Home/components/NewsReport/index.vue'
</script>

<template>
  <!-- 轮播图模块 -->
  <Carousel />
  <!-- 大会议程模块 -->
  <Agenda />
  <!-- 大会亮点模块 -->
  <Highlights />
  <!-- 精彩活动模块 -->
  <ExcitingActivities />
  <!-- 重要嘉宾模块 -->
  <ImportantGuests />
  <!-- 新闻资讯模块 -->
  <NewsReport />
</template>

<style scoped lang="scss"></style>
