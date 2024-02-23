<script setup lang="ts">
import LineCombination from './LineCombination.vue'
import GlassMimicry1 from './GlassMimicry1.vue'
import GlassMimicry2 from './GlassMimicry2.vue'
import PeopleAnimation from './PeopleAnimation/index.vue'
import WaveFont from './WaveFont.vue'
import ShakeButton from './ShakeButton.vue'
import useScrollToTop from '@/hooks/useScrollToTop'

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
  <div class="ml10% mt[20px] w80% max-md:hidden">
    <p class="left-0 top-5% h-[80px] w-full font-size-[30px] font-bold">
      大会亮点&nbsp;<span class="font-size-[23px]">Conference Highlights</span>
    </p>
    <div class="container2 w-full">
      <div v-for="(item, index) in boxList" :key="index" class="box">
        <component :is="item.element" />
      </div>
    </div>
    <div class="relative w-full">
      <div class="bg h50% w-full flex bg-no-repeat">
        <GlassMimicry1 class="animation-delay-1 animate__zoomIn wow ml-[35%] mr-[-5%] animate-duration-2000">
          <p class="font-size-[28px] color-[#fff] font-bold">
            议题更前沿
          </p>
          <p class="font-size-[16px] color-[#fff]">
            大会主题及议题、展览锚定数字中国建设要求，助力政企单位从政策、技术、人才、产业等各层面落实工作。
          </p>
          <img class="w-full" src="/public/light/1.webp" alt="">
        </GlassMimicry1>
        <GlassMimicry2 class="animate__zoomIn animation-delay-1 wow animate-duration-2000">
          <p class="font-size-[28px] color-[#fff] font-bold">
            线上更精彩
          </p>
          <p class="font-size-[16px] color-[#fff]">
            “掌上论剑”将进一步丰富内容，增强互动性、趣味性，线上持续精彩。
          </p>
          <img class="w-full" src="/public/light/2.webp" alt="">
        </GlassMimicry2>
      </div>
      <div class="w-full flex flex-col justify-center">
        <WaveFont />
        <PeopleAnimation class="animate__zoomIn animation-delay-1 wow absolute left-[-30%] top-10 animate-duration-2500" />
        <ShakeButton class="absolute right-25% top-200" />
      </div>
      <div class="bg h50% w-full flex bg-contain bg-right bg-no-repeat">
        <GlassMimicry2 class="animate__zoomIn animation-delay-1 wow ml-[-35%] mr-[-70%] animate-duration-2000">
          <p class="font-size-[28px] color-[#fff] font-bold">
            成果更显著
          </p>
          <p class="font-size-[16px] color-[#fff]">
            将推出国内首份《2023中国数字安全能力洞察报告》，报告涵盖趋势、科技、人才、实践等多部分内容，引领行业发展方向。
          </p>
          <img class="w-full" src="/public/light/3.webp" alt="">
        </GlassMimicry2>
        <GlassMimicry1 class="animate__zoomIn animation-delay-1 wow animate-duration-2000">
          <p class="font-size-[28px] color-[#fff] font-bold">
            国际化更深入
          </p>
          <p class="font-size-[16px] color-[#fff]">
            峰会将通过引入国际组织、设置国际话题等，从全球角度研判数字化进程和趋势。
          </p>
          <img class="w-full" src="/public/light/4.webp" alt="">
        </GlassMimicry1>
      </div>
    </div>
  </div>
  <!-- 移动端大会亮点 -->
  <div class="mt-[15px] h-[190px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">大会亮点</span>&nbsp;
      <span class="font-size-[12px]">Conference Highlights</span>
    </div>
    <div class="h-[55px] w-full flex justify-between">
      <div v-for="(item, index) in highLightsList" :key="index" class="w-20% flex flex-col items-center justify-start">
        <span class="font-size-[18px] color-[#29B2D0] font-bold">{{ item.number }}</span>
        <span class="font-size-[12px] color-[#2A7DBE]">{{ item.title }}</span>
      </div>
    </div>
    <div class="h-[90px] flex justify-between bg-[#EFFBFF]">
      <span class="h-full w-24% flex flex-col items-center justify-between">
        <span class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#29B2D0] font-bold">议题更前沿</span>
        <img class="h-65% w-full" src="/public/light/1.webp" alt="">
      </span>
      <span class="h-full w-24% flex flex-col items-center justify-between">
        <span class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#2A7DBE] font-bold">线上更精彩</span>
        <img class="h-65% w-full" src="/public/light/2.webp" alt="">
      </span>
      <span class="h-full w-24% flex flex-col items-center justify-between">
        <span class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#29B2D0] font-bold">成果更显著</span>
        <img class="h-65% w-full" src="/public/light/3.webp" alt="">
      </span>
      <span class="h-full w-24% flex flex-col items-center justify-between">
        <span class="h-35% w-full flex items-center justify-center font-size-[14px] color-[#2A7DBE] font-bold">国际化更深入</span>
        <img class="h-65% w-full" src="/public/light/4.webp" alt="">
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('/public/bg/bg1.png');
}
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
