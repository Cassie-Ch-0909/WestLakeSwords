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

// 往期回顾数组
const pastList = ref([
  {
    img: '/public/pastDate/1.webp',
    title: '2022构建安全可信的数字世界',
    content: '2022年西湖论剑·网络安全大会由浙江省互联网信息办公室、 浙江省经济和信息化厅、浙江省公安厅、浙江省科学技术协会、浙江省工商业联合会、 浙江省通信管理局、杭州市人民政府主办，拟于2022年7月2日-3日召开，主题为\'构建安全可信的数字世界\' 。  作为国内首个进入十年的网络安全大会，本次大会将首设北京、杭州双主场 ，大会议题聚焦“两法一条例”落地实施、 助力 “ 浙江数字化改革 ”  高质量发展等方向 ， 从关键信息基础设施安全、数字城市安全、个人信息安全、亚运网络安全、 信创安全、云安全、元宇宙安全等网络安全数据安全的新技术、新应用、新场景出发 ， 邀请相关政府部门领导、两院院士、知名专家、 网络安全从业者等一起，分析现状、研判趋势 , 探讨“构建安全可信的数字世界”的可行路径。',
  },
  {
    img: '/public/pastDate/2.webp',
    title: '2021 安全:数字化改革之根本',
    content: '2021年的西湖论剑大会于4月24日在杭州国际博览中心举办，本届大会主题为 “安全：数字化改革之根基”。届时，大会邀请相关主管部门领导、国内外知名专家学者、网络信息安全行业从业者们，共同解读中国网络信息安全产业政策、法规、行业标准等，厘清网络信息安全发展方向。',
  },
  {
    img: '/public/pastDate/4.webp',
    title: '2020 数治安全 智理未来',
    content: '2020西湖论剑·网络安全线上峰会，主题为“数治安全 智理未来”。通过北京、杭州两地直播间同步连线直播的形式，聚焦后疫情时代的网络安全新业态、新模式，延续两会的热议话题，邀请政府主管部门领导、知名专家学者和网络安全专家“云聚集”，系统解读数字中国发展浪潮中的智慧城市安全、大数据安全、云安全、5G安全、工业互联网安全等多领域方向的最新成果，共推数字世界新时代。峰会设立1个主论坛，6个分论坛，首创青年科学家对话、首推网络安全云上展览，以更为新颖的方式，更多对话替代主题演讲，将“论”进行到底。',
  },
  {
    img: '/public/pastDate/5.webp',
    title: '2019 安全：赋能数字新时代',
    content: '2019年4月19日-21日在杭州国际博览中心隆重举行的主题为“安全：赋能数字新时代”的西湖论剑网络安全大会，邀请政府主管部门、知名专家学者和优秀企业家作为主讲嘉宾，系统解读政府在构建数字技术、数字经济、数字政府、数字社会等领域顶层设计，涵盖数字经济时代网络安全最新前沿技术及创新成果分享，包括智慧城市安全、云安全、移动安全、大数据安全、工控安全、物联网安全等多个方向。包含主论坛、网络安全创新成果展、全新升级的网络安全技能大赛和十多个技术、管理及行业分论坛，共话网络安全前沿核心议题，共推数字新时代。',
  },
  {
    img: '/public/pastDate/6.webp',
    title: '2018 新时代 新安全 新力量',
    content: '2018年4月27日，2018西湖论剑·网络安全大会在浙江杭州国际博览中心隆重召开，设置了主论坛和工业互联网信息安全、智慧城市信息安全、应急响应及威胁情报等8个分论坛。  中国科学院院士、中国工程院院士、联合国犯罪和司法研究所技术与安全项目负责人、全球顶级网安企业代表、主管部门网络安全业务负责人等国内外知名专家学者和行业内优秀企业家围绕网络空间安全战略、关键信息基础设施保护、产业发展趋势、人才培养等领域进行了深度交流，分享了行业内最佳创新案例和安全技术实践。来自全球网络安全相关行业近3000名嘉宾出席。',
  },
  {
    img: '/public/pastDate/7.webp',
    title: '2017 智引新安全 数领大未来',
    content: '2017西湖论剑（中国网络安全创新分享大会）在世界互联网大会永久举办地桐乡乌镇举行。 2017西湖论剑由中央网信办网络安全协调局、公安部网络安全保卫局、国家信息中心、浙江省网信办、浙江省公安厅、浙江省经信委、浙江省科技厅、浙江省通管局联合指导，中国网络空间安全协会、中国信息产业商会信息安全产业分会主办，杭州安恒信息技术有限公司承办。以“智引新安全，数领大未来”为主题，见证大数据、人工智能与网络安全的美丽邂逅，深刻解读《网络安全法》。',
  },
  {
    img: '/public/pastDate/8.webp',
    title: '2016 安若磐石，云之可栖',
    content: '2016年10月16日下午，2016杭州·云栖大会火爆了4天之后，在杭州云栖小镇国际会展中心落下帷幕。本届大会是今年继G20杭州峰会之后，杭州举办的首个吸引全球科技人才的大会，也是在国内科技创新及互联网等领域有着极大影响力。 大会以“飞天·进化”为主题涵盖了包括电商、网络安全、人工智能、游戏、多媒体、互联网+、政务、国际、大数据、生命科学、物联网等共计20个方向和领域，数百场主题演讲、数万平米创新展览体验区和国内外顶尖科技亮相，参会人数近4万人。',
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
        <img class="h-full w-18% shadow-xl" src="/public/about/1.webp" alt="">
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
          <GlassMimicry1 class="animation-delay-1 wow animate__zoomIn ml-[35%] mr-[-5%] animate-duration-2000">
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
        <SwiperSlide v-for="(item, index) in pastList" :key="index">
          <div class="h-380px w-full shadow-xl">
            <img class="h-50% w-full" :src="item.img" alt="">
            <div class="h-full w-full bg-[#659BCD] color-[#fff]">
              <p class="h16% w-full flex items-center justify-center font-size-20px color-[black] font-bold">
                {{ item.title }}
              </p>
              <p class="ellipsis pb5%% pl5% pr5">
                {{ item.content }}
              </p>
            </div>
          </div>
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
      <div class="mt20px h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
        往期回顾
      </div>
      <Swiper
        :slides-per-view="3"
        :space-between="4"
      >
        <SwiperSlide v-for="(item, index) in pastList" :key="index">
          <div class="h-170px w-full">
            <img class="h-50% w-full" :src="item.img" alt="">
            <div class="h-full w-full bg-[#93CEEA] color-[#fff]">
              <p class="h22% w-full flex items-center justify-center font-size-12px color-[black] font-bold">
                {{ item.title }}
              </p>
              <p class="ellipsis2 font-size-10px">
                {{ item.content }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
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

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 5;
  text-overflow: ellipsis;
}
.ellipsis2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
}
</style>
