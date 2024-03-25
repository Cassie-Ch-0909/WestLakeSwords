<script setup>
const carouselList = ref([
  {
    img: 'https://image.3001.net/images/20240319/1710837144_65f94d9860d390743cb1d.jpg',
    content: '勒索软件为何总能“复活”？',
  },
  {
    img: 'https://image.3001.net/images/20240305/1709634903_65e6f557abf3d7dba4bb0.jpg',
    content: ' 聚焦两会 | 网络安全成为2024年热议“关键词”',
  },
  {
    img: 'https://image.3001.net/images/20240313/1710309274_65f13f9ad6fad9f3ec100.png',
    content: 'CrowdStrike业绩、股价狂飙，“AI+网络安全”成为资本的新宠？',
  },
  {
    img: 'https://image.3001.net/images/20240229/1709204849_65e06571917bb937df0c8.jpg',
    content: '为什么黑客这么喜欢攻击加密货币？',
  },
  {
    img: 'https://image.3001.net/images/20240312/1710226375_65effbc70c53aab853427.jpg?1710226376617',
    content: '起底“疯狂”作案的勒索软件 Clop',
  },
])

const WebSecureList = ref([
  {
    title: '三行代码，让Yakit Codec为我一键处理。。。',
    content: '@Rookie师傅在上周的更新中，Yakit的v1.3.1sp1版本和Yaklang v1... ',
    rightImg: 'https://image.3001.net/images/20240318/1710732666_65f7b57af0e9ffb4ee889.png',
    userAvator: 'https://image.3001.net/images/20230601/1685587096_64780498cefe0a1eacba3.png',
    username: 'yaklang',
    date: '2024-3-25',
    hot: '5833',
  },
  {
    title: '三行代码，让Yakit Codec为我一键处理。。。',
    content: '@Rookie师傅在上周的更新中，Yakit的v1.3.1sp1版本和Yaklang v1... ',
    rightImg: 'https://image.3001.net/images/20240318/1710732666_65f7b57af0e9ffb4ee889.png',
    userAvator: 'https://image.3001.net/images/20230601/1685587096_64780498cefe0a1eacba3.png',
    username: 'yaklang',
    date: '2024-3-25',
    hot: '5833',
  },
  {
    title: '三行代码，让Yakit Codec为我一键处理。。。',
    content: '@Rookie师傅在上周的更新中，Yakit的v1.3.1sp1版本和Yaklang v1... ',
    rightImg: 'https://image.3001.net/images/20240318/1710732666_65f7b57af0e9ffb4ee889.png',
    userAvator: 'https://image.3001.net/images/20230601/1685587096_64780498cefe0a1eacba3.png',
    username: 'yaklang',
    date: '2024-3-25',
    hot: '5833',
  },
])
</script>

<template>
  <div class="flex flex-col">
    <!-- 轮播图模块 -->
    <div class="mt20px w-720px border-2px border-#E0E0E0 rounded-10px border-solid bg-#fff pb10px pl10px pr10px pt10px">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="(item, index) in carouselList" :key="index">
          <img :src="item.img" alt="" class="h-full w-full">
          <p class="absolute bottom-0 left-0 right-0 bg-#00000080 p-10px text-#fff">
            {{ item.content }}
          </p>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- tab栏切换 最新|最热 -->
    <div class="mt10px h55px w-full flex items-center rounded-t-10px bg-#fff pl10px">
      <span class="border-b-4 border-#00B4BC pt5px">最新</span>
      <span class="pl10px pr10px">|</span>
      <span>最热</span>
    </div>
    <!-- 每条文章 -->
    <div
      v-for="(item, index) in WebSecureList" :key="index"
      class="h240px w-full flex flex-col justify-between border-b-1 border-t-1 border-#E0E0E0 bg-#fff p20px"
    >
      <p class="font-size-20px font-bold">
        {{ item.title }}
      </p>
      <div class="mt10px h110px w-full flex justify-between">
        <p class="h-full flex flex-1 items-center pr20px">
          {{ item.content }}
        </p>
        <img class="w-175px" :src="item.rightImg" alt="">
      </div>
      <div class="w-full flex flex-1 items-center justify-between">
        <div class="h-full flex items-center">
          <img class="w30px rounded-50%" :src="item.userAvator" alt="">
          <span class="pl10px pr10px">{{ item.username }}</span>
          <span class="pt5px font-size-13px color-#999">{{ item.date }}</span>
        </div>
        <div class="pt5px font-size-13px color-#999">
          已有<span class="color-#00B4BC"> {{ item.hot }} </span>人围观
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
