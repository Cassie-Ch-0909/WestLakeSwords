<script setup>
import OrientationSenseCard from './OrientationSenseCard.vue'
</script>

<template>
  <!-- PC端新闻资讯 -->
  <div class="mt[50px] h-[800px] w100% bg-contain bg-left bg-no-repeat max-md:hidden">
    <p class="left-0 top-5% ml10% h-[80px] w-80% font-size-[30px] font-bold">
      新闻资讯&nbsp;<span class="font-size-[23px]">News Report</span>
    </p>
    <OrientationSenseCard />
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/3.png');
}
</style>
