<script setup lang="ts">
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
    title: '杭州亚运赛事网络安全保护启动，天穹新一代安全运营中心亮相',
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
  {
    img: '/public/news/7.jpg',
    title: '“数字安全＠数字中国” 2023西湖论剑·数字安全大会今天开幕',
    desc: '简介： 今年，西湖论剑·网络安全大会进入新的十年，大会正式升级为“西湖论剑·数字安全大会”。 在今天的大会上， 新一代的“天穹安全...',
    news: '杭州电视台',
    time: '2023-05-07',
  },
]
</script>

<template>
  <div style="width: 100%">
    <div class="bg container">
      <div class="content">
        <div v-for="(item, index) in spanList" :key="index" class="card2">
          <p class="h-35% w-full p-5% font-size-[16px] font-bold">
            {{ item.title }}
          </p>
          <img :src="item.img" alt="" class="h-45% w-full">
          <div class="h-20% w-full flex flex-col items-center justify-center bg-[#fff]">
            <span class="mt-3% h-50% w-60% flex items-center justify-center rounded-[15px] bg-[#05BAB3] color-[#fff] font-bold">{{ item.news }}</span>
            <span class="mt-2% font-size-[14px]">{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  background-image: url('/public/1.jpg');
}
.container {
  width: 100%;
  // height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  // padding: 100px 0 60px;
  position: relative;
  height: 360px;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    perspective: 900px;

    .card2 {
      width: 210px;
      height: 280px;
      margin: 20px;
      transform: rotateY(0);
      transition: 0.3s;
      border-radius: 6px;
      border: 5px solid #fff;
      cursor: pointer;
      position: relative;

      img {
        width: 100%;
        object-fit: cover;
      }

      &:hover {
        transform: rotateY(0) scale(1.25) !important;
        box-shadow: 0 10px 20px rgba(255, 255, 255, 0.6);

        & ~ .card {
          transform: rotateY(-25deg);
        }
      }
    }

    &:hover {
      .card {
        transform: rotateY(25deg);
      }
    }
  }
}
</style>
