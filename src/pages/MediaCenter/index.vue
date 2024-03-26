<script setup>
// import {getNewsListAPI} from '@/apis/media'
const titleList = ref([
  '新闻中心',
  '精彩图片',
  '精彩视频',
])

const newsCenterList = ref([
  {
    title: '【重磅干货】大家都关心的嘉宾PPT下载指南来啦！',
    content: '指路贴来啦！大家都关心的嘉宾PPT下载指南在这里！一图解锁西湖论剑官网&小程序下载路径，看众多专家真知灼见，干货满满 ，引领行业思辨！',
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/0ceb338a21e043a69ba41e0b164ea739.jpg',
    channel: '西湖论剑',
    time: '2023-5-12',
  },
  {
    title: '2023西湖论剑·数字安全大会举办',
    content: '央广网杭州5月8日消息(记者 姜頔)自山下而仰山巅谓之高远，自山前而窥山后谓之深远，自近山而望远山谓之平远。5月7日，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会在杭州成功举办。',
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/15d0f956397444c3ad5d8c2c14b2f800.jpg',
    channel: '央广网',
    time: '2023-05-08',
  },
  {
    title: '2023西湖论剑·数字安全大会在杭举行',
    content: '人民网杭州5月7日电 （张帆）今天，以“数字安全@数字中国”为主题的2023西湖论剑·数字安全大会（原西湖论剑·网络安全大会）在杭州举行。大会围绕“数字安全赋能数字中国”开展百余场专题报告，输出数字中国安全建设前沿经验，为助力千行百业数字化转型、守护数字中国建设成果、筑牢中国的数字安全屏障建言献策。',
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/13efccd6a2c14f4b80118321660608e1.jpg',
    channel: '人民网',
    time: '2023-05-08',
  },
  {
    title: '西湖论剑暨安恒信息年度新品发布会在杭州举行',
    content: '人民网杭州4月19日电 （叶宾得）今天，西湖论剑暨安恒信息首次年度新品发布会在杭州举行，发布会以“新·见未来 实·现梦想”为主题，介绍安恒“MSS+数据安全”两大战略新进展、发布新产品，并为2023年市场方向进行布局。',
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/effab0cf0ee94f78b486e454cac67bc0.png',
    channel: '人民网－浙江频道',
    time: '2023-04-19',
  },
])

const wonderfulPicList = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8f9165a37c6e495fa2c3d87e3ca40292.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/526899a3e3f7459da9c6a3120d1a9b84.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/99a2c47a2dbd4600acc3fe14604c8a42.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/901bbf0cf5af468f91f13bfba903bc5b.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/901bbf0cf5af468f91f13bfba903bc5b.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/b54bc0a569264982adc7c18aa7f0e5eb.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/f0424647ae774ce88f0cb0af5c4179fc.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/4a756e7ded7348f2818cd8950969fad0.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/8dd2c03053214763bffe7546ed84d2bc.jpg',
    title: 'MSS安全托管运营服务论坛-精彩瞬间',
  },
])

const wonderfulVideoList = ref([
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6169d65c3d2410bb93dca53ae073844.jpg',
    title: '主论坛-《2023数字安全能力洞察报告》发布仪式   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/3297a39f860f443e8d01f23ad0f47547.jpg',
    title: '主论坛-数据安全自律倡议   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/95a50d07e8a645808f06a2fd1f2747ae.jpg',
    title: '网络安全标准化人才实训基地揭牌仪式   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/f4d4785210854817b529495de80f47dc.jpg',
    title: '大会启动暨西湖论剑新十年规划发布仪式   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/f1cd9e2c6c524f94ab47f7b800e44c0a.jpg',
    title: '主论坛-亚运仪式（激光 ）   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/93526482d7c04160bb20e26a606a3687.png',
    title: '主论坛-亚运发布仪式    ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/a6169d65c3d2410bb93dca53ae073844.jpg',
    title: '主论坛-《2023数字安全能力洞察报告》发布仪式   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/3297a39f860f443e8d01f23ad0f47547.jpg',
    title: '主论坛-数据安全自律倡议   ',
  },
  {
    img: 'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/95a50d07e8a645808f06a2fd1f2747ae.jpg',
    title: '网络安全标准化人才实训基地揭牌仪式   ',
  },
])

const activeIndex = ref(0)

function changeActiveIndex(index) {
  activeIndex.value = index
}

// /*
//     调接口获取新闻列表
// */
// async function getNewsList(){
//   const res = await getNewsListAPI()
//   newsCenterList.value = res.data
// }
// getNewsList()
</script>

<template>
  <!-- PC端媒体中心 -->
  <div class="bg w-full bg-left bg-no-repeat pb50px max-md:hidden">
    <div class="ml10% mr10% h-full w-80%">
      <p class="h50% w-full flex items-center justify-center pb30px pt30px font-size-[35px] color-[#2C80BE] font-bold">
        媒体中心
      </p>
      <div class="h60px w-full flex items-center justify-center">
        <div
          v-for="(item, index) in titleList" :key="index"
          class="mr40px h-full w10% flex items-center justify-center font-size-18px color-[#00B4BC] font-bold"
          :class="index === activeIndex ? 'border-b-2 border-solid border-[#00B4BC]' : ''"
          @click="changeActiveIndex(index)"
        >
          {{ item }}
        </div>
      </div>
      <div
        v-for="(item, index) in newsCenterList" v-show="activeIndex === 0" :key="index"
        class="mt25px h-180px w-80% flex bg-[#4D8EBF]"
        :class="index % 2 === 1 ? 'ml20% animation-delay-1 animate__fadeInRight wow  animate-duration-2000' : 'animation-delay-1 animate__fadeInLeft wow  animate-duration-2000'"
      >
        <img :src="item.img" alt="" class="h-full w30%">
        <div class="flex flex-col justify-evenly pl10px pr10px">
          <p class="font-bold">
            {{ item.title }}
          </p>
          <p class="font-size-13px color-[#fff]">
            {{ item.content }}
          </p>
          <div class="flex justify-between font-size-13px">
            <div class="h22px w120px flex items-center justify-center rounded-15px bg-[#00B4BC] color-[#fff]">
              {{ item.channel }}
            </div>
            <div>{{ item.time }}</div>
          </div>
        </div>
      </div>
      <div v-show="activeIndex === 1" class="w-full flex flex-wrap justify-between">
        <div
          v-for="(item, index) in wonderfulPicList" :key="index"
          class="mt25px h250px w-33% flex flex-col items-center justify-center"
        >
          <img :src="item.img" alt="" class="h-80% w-full">
          <div>{{ item.title }}</div>
        </div>
      </div>
      <div v-show="activeIndex === 2" class="w-full flex flex-wrap justify-between">
        <div
          v-for="(item, index) in wonderfulVideoList" :key="index"
          class="mt25px h250px w-33% flex flex-col items-center justify-center"
        >
          <img :src="item.img" alt="" class="h-80% w-full">
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
  <!-- 移动端媒体中心 -->
  <div class="[#98EAF7] w-full pb50px md:hidden">
    <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold">
      媒体中心
    </div>
    <div class="h60px w-full flex items-center justify-center">
      <div
        v-for="(item, index) in titleList" :key="index"
        class="mr40px h-full w15% flex items-center justify-center font-size-14px color-[#00B4BC] font-bold"
        :class="index === activeIndex ? 'border-b-2 border-solid border-[#00B4BC]' : ''"
        @click="changeActiveIndex(index)"
      >
        {{ item }}
      </div>
    </div>
    <div
      v-for="(item, index) in newsCenterList" v-show="activeIndex === 0" :key="index"
      class="mt10px h-120px w-full flex bg-[#4D8EBF]"
    >
      <img :src="item.img" alt="" class="h-full w30%">
      <div class="flex flex-col justify-evenly pl10px pr10px">
        <p class="ellipsis font-bold">
          {{ item.title }}
        </p>
        <p class="ellipsis2 font-size-13px color-[#fff]">
          {{ item.content }}
        </p>
        <div class="flex justify-between font-size-13px">
          <div class="h22px w120px flex items-center justify-center rounded-15px bg-[#00B4BC] color-[#fff]">
            {{ item.channel }}
          </div>
          <div>{{ item.time }}</div>
        </div>
      </div>
    </div>
    <div v-show="activeIndex === 1" class="w-full flex flex-wrap justify-between">
      <div
        v-for="(item, index) in wonderfulPicList" :key="index"
        class="ellipsis mt10px h120px w-33% flex flex-col items-center justify-center"
      >
        <img :src="item.img" alt="" class="h-80% w-full">
        <div>{{ item.title }}</div>
      </div>
    </div>
    <div v-show="activeIndex === 2" class="w-full flex flex-wrap justify-between">
      <div
        v-for="(item, index) in wonderfulVideoList" :key="index"
        class="ellipsis mt10px h120px w-33% flex flex-col items-center justify-center"
      >
        <img :src="item.img" alt="" class="h-80% w-full">
        <div>{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
::v-deep.el-tabs__item {
  font-size: 18px;
}

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
  text-overflow: ellipsis;
}
.ellipsis2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 2;
  text-overflow: ellipsis;
}
</style>
