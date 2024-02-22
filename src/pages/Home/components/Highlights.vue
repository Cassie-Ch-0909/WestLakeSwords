<script setup lang="ts">
import LineCombination from './LineCombination.vue'
import useScrollToTop from '@/hooks/useScrollToTop'
import GlassMimicry1 from '@/pages/Home/components/GlassMimicry1.vue'
import GlassMimicry2 from '@/pages/Home/components/GlassMimicry2.vue'
import PeopleAnimation from '@/pages/Home/components/PeopleAnimation/index.vue'

const boxList = [
  { element: LineCombination },
]

useScrollToTop()

const highLightsList = ref([
  {
    number: '500+',
    title: '主题演讲',
  },
  {
    number: '550+',
    title: '合作伙伴',
  },
  {
    number: '10000+',
    title: '与会嘉宾',
  },
  {
    number: '10w+',
    title: '行业从业者',
  },
  {
    number: '2500w+',
    title: '直播观看',
  },
])
</script>

<template>
  <!-- PC端大会亮点 -->
  <div class="ml10% mt[20px] h-[260px] w80% max-md:hidden">
    <p class="left-0 top-5% h-[80px] w-full font-size-[30px] font-bold">
      大会亮点
    </p>
    <div class="container2 w-full">
      <div v-for="(item, index) in boxList" :key="index" class="box">
        <component :is="item.element" />
      </div>
    </div>
    <div class="relative h-[1100px] w-full">
      <div class="h50% w-full flex">
        <GlassMimicry1 class="ml-[-15%]" />
        <GlassMimicry2 class="mr-[-15%]" />
      </div>
      <div>
        <PeopleAnimation class="absolute left-8% top-20%" />
      </div>
      <div class="flex">
        <GlassMimicry2 class="ml-[-15%]" />
        <GlassMimicry1 class="mr-[-15%]" />
      </div>
    </div>
  </div>
  <!-- 移动端大会亮点 -->
  <div class="mt-[15px] h-[350px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">大会亮点</span>&nbsp;
      <span class="font-size-[12px]">Conference Highlights</span>
    </div>
    <div class="h-[70px] w-full flex justify-between">
      <div v-for="(item, index) in highLightsList" :key="index" class="w-20% flex flex-col items-center justify-start">
        <span class="font-size-[18px] color-[#29B2D0] font-bold">{{ item.number }}</span>
        <span class="font-size-[12px] color-[#2A7DBE]">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container2 {
  box-sizing: border-box;
  width: 100%;
  height: auto !important;
  min-height: 100%;
  // background-image: linear-gradient(135deg, #224141, #162a2a);
  padding: 6px 4px;
  overflow-y: auto;

  .box {
    // margin-left: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #04d8b0;
    border-radius: 10px;
    // background-image: linear-gradient(to right, #04182c, #000c17, #04182c);
    background-image: url('/1.jpg');
    color: #ffffff;
  }
}
</style>
