<script setup lang="ts">
// import { ref } from 'vue'
// import type { TabsPaneContext } from 'element-plus'
import { useRouter } from 'vue-router'
import SlideButtonTab from './SlideButtonTab.vue'

const activeName = ref('first')

function handleClick() {
  // console.log(tab, event)
}

const btnList = ref([
  {
    title: '格致论道',
    img: '/public/activity/1.webp',
    sumer: '让“圈外人”关注网络安全，让“冷”科普做到“热”传播',
    content: '5月4-6日 西湖论剑安全特训营是国内领先的数字安全人才交流、孵化及实训平台，致力于成为数字时代的“数字安全人才助推器”。',
    name: 'first',
  },
  {
    title: '安全特训营',
    img: '/public/activity/2.webp',
    sumer: '数字安全人才助推器',
    content: '5月5日 18:30 \'格致论道\'是中国科学院计算机网络信息中心和中国科学院科学传播局联合主办的科学文化讲坛。致力于非凡思想的跨界交流，提倡以\'格物致知\'的精神探讨科技、教育、生活、未来的发展。',
    name: 'second',
  },
  {
    title: '新品发布',
    img: '/public/activity/3.webp',
    sumer: '最新研究成果发布会',
    content: '以体系化课程、实战化导向为显著特色，服务于数字化转型背景下的政府、企事业单位，为其培养数字安全的管理者、实战人才提供有力支撑，为国家数字安全人才发展持续输出强有力的“燃料”。',
    name: 'third',
  },
  {
    title: '第二直播间',
    img: '/public/activity/4.jpg',
    sumer: '创新内容形式,立体化开展宣传',
    content: '一次掌上场景搭建下的即时性交流；身临其境的参与感，精彩看点的抢先看；行业专家、观点嘉宾在线解读核心观点；更有大会成果密集输出，限定款宠粉福利',
    name: 'fourth',
  },
  {
    title: '掌上论剑',
    img: '/public/activity/6.jpg',
    sumer: '线下“精致”、线上“亮眼”',
    content: '以西湖论剑官网为载体，精心策划“掌上论剑”系列活动，推出“点亮网安，守护城市”、“ 守护每一份网安愿景”等互动活动，《今夜不破防》、《十日谈》、《新时代安全观对话》等亮点节目，打造一档精彩、有趣的掌上论剑特色节目。',
    name: 'fifth',
  },
  {
    title: '十周年回顾',
    img: '/public/activity/5.webp',
    sumer: '十年磨一剑',
    content: '2022年第十届西湖论剑·网络安全大会，十年磨一剑，向世界递出一张具有全球影响力、全国引领力、浙江辨识度的网络安全大会金名片。',
    name: 'sixth',
  },
])

/*
    点击精彩活动跳转到精彩活动页面
*/
const router = useRouter()
function gotoWonderfulActivities() {
  router.push({ path: '/wonderfulactivities' })
}
</script>

<template>
  <!-- PC端精彩活动 -->
  <div class="relative ml10% mt[100px] w80% max-md:hidden">
    <p class="left-0 top-5% w-full font-size-[30px] font-bold">
      精彩活动&nbsp;<span class="font-size-[23px]">Exciting Activities</span>
    </p>
    <SlideButtonTab />
  </div>
  <!-- 移动端精彩活动 -->
  <div class="mt-[15px] h-[235px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">精彩活动</span>&nbsp;
      <span class="font-size-[12px]">Exciting Activities</span>
    </div>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in btnList" :key="index" class="h-[140px] w-full flex bg-[#EFFBFF]" :label="item.title" :name="item.name" @click="gotoWonderfulActivities">
          <div class="h-full w-60%">
            <img :src="item.img" class="h-full w-full" alt="">
          </div>
          <div class="h-full w-40% p-2%">
            <p class="font-size-[14px] font-bold">
              {{ item.sumer }}
            </p>
            <p class="ellipsis pt5% font-size-[12px]">
              {{ item.content }}
            </p>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 60px;
  max-height: 60px;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
}

::v-deep .el-tabs__item.is-active {
  color: #29b2d9;
  font-weight: bold;
}
</style>
