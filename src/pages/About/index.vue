<script setup>
import GlassMimicry1 from '@/pages/Home/components/Highlights/GlassMimicry1.vue'
import GlassMimicry2 from '@/pages/Home/components/Highlights/GlassMimicry2.vue'
import PeopleAnimation from '@/pages/Home/components/Highlights/PeopleAnimation/index.vue'
import WaveFont from '@/pages/Home/components/Highlights/WaveFont.vue'
import ShakeButton from '@/pages/Home/components/Highlights/ShakeButton.vue'
import LineCombination from '@/pages/Home/components/Highlights/LineCombination.vue'
import useScrollToTop from '@/hooks/useScrollToTop'

const boxList = [
  { element: LineCombination },
]

useScrollToTop()
</script>

<template>
  <!-- PC端关于大会 -->
  <div class="[#98EAF7] bg w-full bg-contain bg-left bg-no-repeat pb50px max-md:hidden">
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
          <PeopleAnimation class="animate__zoomIn animation-delay-1 wow absolute left-[-30%] top-10 animate-duration-2500" />
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
    </div>
  </div>

  <!-- 移动端关于大会 -->
  <div class="[#98EAF7] w-full from-[#8EEDF0] to-[#8EC4F7] from-10% to-90% via-30% bg-gradient-to-r pb50px md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      大会议程
    </div>
    <div class="w-full flex items-center justify-center">
      <div
        v-for="(item, index) in dateList" :key="index"
        :class="activeIndex === index ? 'bg-[#00B4BC]' : 'bg-[#EFFBFF]'"
        class="mr2% h-60% w-15% flex items-center justify-center rounded-[10px]" @click="selectDate(index)"
      >
        <div
          :class="activeIndex === index ? 'color-[#EFFBFF]' : 'color-[#00B4BC]'"
          class="h90% w80% flex flex-col items-center justify-center rounded-[10px]"
        >
          <span class="text-size-[13px]">5月</span>
          <span class="text-size-[18px]">{{ item }}</span>
        </div>
      </div>
    </div>
    <div v-for="(item, index) in dateList" v-show="activeIndex === index" :key="index">
      <div v-for="(item2, index2) in options" :key="index2">
        <div v-show="selectedOptionValue === item2.value || selectedOptionValue === '全部'">
          <div class="mb15px mt15px flex items-center">
            <i class="iconfont font-size-30px color-[#0E88A4]" :class="item2.icon" />
            <span class="ml10px text-size-[19px] color-[#0E88A4] font-bold">{{ item2.value }}</span>
          </div>
          <div class="w-full rounded-[15px] bg-[#fff] pb20px pt20px shadow-lg">
            <div class="w-full flex items-center">
              <div class="w20% flex flex-col items-center justify-around font-size-12px">
                <img src="/public/agenda/time.png" alt="" class="mb10px h15px w15px">
                <span>10:00-11:30</span>
              </div>
              <div class="ml1% w-55% flex flex-col justify-center">
                <p class="pl2% text-size-[14px] color-[#00B4BC] font-bold">
                  网络安全创新发展高端论坛
                </p>
                <div class="flex items-center color-[grey]">
                  <i class="iconfont icon-dingwei font-size-20px" />
                  <p class="text-size-[12px]">
                    杭州市滨江区文化中心剧院一层
                  </p>
                </div>
              </div>
              <div
                class="h20px w15% flex items-center justify-center rounded-[10px] bg-[#00B4BC] font-size-12px color-[#fff]"
              >
                <p>观看回放</p>
              </div>
              <div class="ml3% w3% flex items-center justify-center pr2% color-[#00B4BC]" @click="showMoreContent">
                <i class="iconfont icon-arrow-down font-size-12px" />
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
              <div class="flex pt15px">
                <i class="iconfont icon-shijian1" />
                <span class="pl2%">09:30-12:00</span>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  第二直播间 精彩干货不间断
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  郝志强
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  工业和信息化部教育与考试中心主任 书记
                </p>
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px bg-[#EFFBFF] pb15px pl6%">
              <div class="flex pt15px">
                <i class="iconfont icon-shijian1" />
                <span class="pl2%">09:30-12:00</span>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  第二直播间 精彩干货不间断
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  郝志强
                </p>
              </div>
              <div class="flex pt5px font-size-13px">
                <p>
                  工业和信息化部教育与考试中心主任 书记
                </p>
              </div>
            </div>
            <div v-show="showMoreContentFlag" class="mt10px h-50px w-full flex items-center justify-center">
              <button class="putAway" @click="showMoreContent">
                收起
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/3.png');
}
</style>
