<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import GlassMimicry1 from '@/pages/Home/components/Highlights/GlassMimicry1.vue'
import GlassMimicry2 from '@/pages/Home/components/Highlights/GlassMimicry2.vue'
import PeopleAnimation from '@/pages/Home/components/Highlights/PeopleAnimation/index.vue'
import WaveFont from '@/pages/Home/components/Highlights/WaveFont.vue'
import ShakeButton from '@/pages/Home/components/Highlights/ShakeButton.vue'
import LineCombination from '@/pages/Home/components/Highlights/LineCombination.vue'
import useScrollToTop from '@/hooks/useScrollToTop'

// Import Swiper Vue.js components

// Import Swiper styles
import 'swiper/css'

const boxList = [
  { element: LineCombination },
]

useScrollToTop()

// 下拉箭头展示更多内容的flag值
const showMoreContentFlag = ref(false)

/*
    定义一个方法
    用来折叠和展开更多内容
*/
function showMoreContent() {
  showMoreContentFlag.value = !showMoreContentFlag.value
}
// 移动端数组
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
  <!-- PC端关于大会 -->
  <div class="bg [#98EAF7] w-full bg-contain bg-left bg-no-repeat pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        关于大会
      </p>
      <div class="h-200px w-full flex">
        <img class="h-full w-18%" src="/public/about/1.webp" alt="">
        <div class="ml1% flex-1">
          西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。

          2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。

          本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。
        </div>
      </div>
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        大会亮点
      </p>
      <div class="container2 w-full">
        <div v-for="(item, index) in boxList" :key="index" class="box">
          <component :is="item.element" />
        </div>
      </div>
      <div class="relative w-full">
        <div class="h50% w-full flex">
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
          <PeopleAnimation
            class="animate__zoomIn animation-delay-1 wow absolute left-[-30%] top-10 animate-duration-2500"
          />
          <ShakeButton class="absolute right-25% top-200" />
        </div>
        <div class="h50% w-full flex">
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
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        往期回顾
      </p>
      <Swiper
        :slides-per-view="3"
        :space-between="50"
      >
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
        <SwiperSlide>
          <img src="/public/activity/3.webp" alt="">
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

  <!-- 移动端关于大会 -->
  <div class="[#98EAF7] bg w-full bg-contain bg-left bg-no-repeat pb50px md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      关于大会
    </div>
    <div class="w-full pl2% pr2% font-size-13px">
      <p>
        西湖论剑·网络安全大会自2012年创办，是国内首个已举办十周年的网络安全大会。十届以来，大会线下参会嘉宾累计超过10000人次，线上直播观看累计超过2500万人次，已成为国内网络安全领域的一张“金名片”。历届大会期间，国家部委、省市领导，院士、知名专家和优秀企业代表齐聚杭州，共商数字时代的安全之道。

        2023年是全面贯彻落实党的二十大精神的开局之年，为深入学习贯彻党的二十大精神，推动落实《数字中
      </p>
      <p v-if="showMoreContentFlag">
        国建设整体布局规划》尤其是筑牢数字安全屏障的要求，推进数字安全人才培养、科技创新、产业融合发展，以保障数字政务、数字经济、数字社会等数字化生态安全发展。在迎来大会十一年之际，由“西湖论剑·网络安全大会”升级为“西湖论剑·数字安全大会”，定于5月5日-8日在杭州举办。

        本届大会主题为“数字安全@数字中国”，大会将邀请相关政府部门、科研院所，以及数字生态各领域的参与者、构建者、守护者，共同探讨数字中国的发展和安全之道。大会将设主论坛、数字安全成果展、多个平行论坛及研讨会，结合数字安全前沿技术、行业应用、人才培养、企业治理等议题展开讨论、展示成果。
      </p>
      <div class="mt10px w-full flex items-center justify-center">
        <button class="putAway" @click="showMoreContent">
          {{ showMoreContentFlag ? '收起' : '展开' }}
        </button>
      </div>
      <div class="mt20px h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
        大会亮点
      </div>
      <div class="h-[55px] w-full flex justify-between">
        <div v-for="(item, index) in highLightsList" :key="index" class="w-20% flex flex-col items-center justify-start">
          <span class="font-size-[18px] color-[#29B2D0] font-bold">{{ item.number }}</span>
          <span class="font-size-[12px] color-[#2A7DBE]">{{ item.title }}</span>
        </div>
      </div>
      <div class="h-[90px] flex justify-between bg-[#EFFBFF]">
        <span class="h-full w-24% flex flex-col items-center justify-between">
          <span
            class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#29B2D0] font-bold"
          >议题更前沿</span>
          <img class="h-65% w-full" src="/public/light/1.webp" alt="">
        </span>
        <span class="h-full w-24% flex flex-col items-center justify-between">
          <span
            class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#2A7DBE] font-bold"
          >线上更精彩</span>
          <img class="h-65% w-full" src="/public/light/2.webp" alt="">
        </span>
        <span class="h-full w-24% flex flex-col items-center justify-between">
          <span
            class="h-35% w-full flex items-center justify-center font-size-[14px] font-size-[14px] color-[#29B2D0] font-bold"
          >成果更显著</span>
          <img class="h-65% w-full" src="/public/light/3.webp" alt="">
        </span>
        <span class="h-full w-24% flex flex-col items-center justify-between">
          <span
            class="h-35% w-full flex items-center justify-center font-size-[14px] color-[#2A7DBE] font-bold"
          >国际化更深入</span>
          <img class="h-65% w-full" src="/public/light/4.webp" alt="">
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/3.png');
}

.putAway {
  font-size: 12px;
  border-radius: 15px;
  width: 55px;
  height: 20px;
  background-color: #00b4bc;
  color: #fff;
}
</style>
