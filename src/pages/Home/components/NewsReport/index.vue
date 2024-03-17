<script setup>
import OrientationSenseCard from './OrientationSenseCard.vue'

const spanList = [
  {
    img: '/public/news/1.jpg',
    title: '【重磅干货】大家都关心的嘉宾PPT下载指南来啦',
    desc: '指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满 ，引领行业思辨！',
    news: '西湖论剑',
    time: '2023-05-12',
  },
  {
    img: '/public/news/2.jpg',
    title: '2023西湖论剑·数字安全大会举办',
    desc: '5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会(原西湖论剑·网络安全大会)成功举办。为更好助推数字中国...',
    news: '央广网',
    time: '2023-05-07',
  },
  {
    img: '/public/news/4.jpg',
    title: '杭州亚运赛事网络安全保护启动',
    desc: '“西湖论剑·网络安全大会”正式升级为数字安全大会。5月7日，2023西湖论剑·数字安全大会发布“新十年”规划，并举行了亚运赛事网络...',
    news: '南方都市报',
    time: '2023-05-08',
  },
  {
    img: '/public/news/5.jpg',
    title: '“新十年”扬帆起航 2023西湖论剑·数字安全大会举办',
    desc: '5 月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会（原西湖论剑·网络安全大会）成功举办。本届大会设一个主...',
    news: '浙江在线',
    time: '2023-05-08',
  },
  // {
  //   img: '/public/news/7.jpg',
  //   title: '“数字安全＠数字中国” 2023西湖论剑·数字安全大会今天开幕',
  //   desc: '简介： 今年，西湖论剑·网络安全大会进入新的十年，大会正式升级为“西湖论剑·数字安全大会”。 在今天的大会上， 新一代的“天穹安全...',
  //   news: '杭州电视台',
  //   time: '2023-05-07',
  // },
]
</script>

<template>
  <!-- PC端新闻资讯 -->
  <div class="animation-delay-1 wow animate__fadeInDown mt[50px] h-[450px] w100% animate-duration-2500 bg-contain bg-left bg-no-repeat max-md:hidden">
    <p class="left-0 top-5% ml10% h-[80px] w-80% font-size-[30px] font-bold">
      新闻资讯&nbsp;<span class="font-size-[23px]">News Report</span>
    </p>
    <OrientationSenseCard />
  </div>

  <!-- 移动端新闻资讯 -->
  <div class="mt-[10px] h-[420px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">新闻资讯</span>&nbsp;
      <span class="font-size-[12px]">News Report</span>
    </div>
    <div v-for="(item, index) in spanList" :key="index" class="mb-[5px] h-[90px] w-full flex items-center justify-center bg-[#EFFBFF]">
      <img :src="item.img" alt="" class="h-full w-40%">
      <div class="h-full w-60% pl2% pr2% pt1%">
        <span class="font-bold">{{ item.title }}</span>
        <div class="flex items-center justify-between">
          <span class="h-full w36% flex items-center justify-center rounded-[10px] bg-[#29B2D9] font-size-[13px] color-[#fff]">{{ item.news }}</span>
          <span class="color-[#29B2D9]">{{ item.time }}</span>
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
