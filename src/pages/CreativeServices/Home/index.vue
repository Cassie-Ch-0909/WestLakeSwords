<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'

const userStore = useUserStore()
const list = ref([
  {
    title: '高颜值巧克力',
    type: '美食',
  },
  {
    title: '护肤品成分大起底',
    type: '美妆',
  },
  {
    title: '无墨镜不出门',
    type: '时尚',
  },
  {
    title: '拍拍家乡风景',
    type: '出行',
  },
  {
    title: '趣味知识科普',
    type: '知识',
  },
  {
    title: '小颗粒积木',
    type: '兴趣爱好',
  },
])
</script>

<template>
  <div class="flex rounded-10px">
    <div class="h300px w70%">
      <!-- 顶部作者简介 -->
      <div class="h130px w-full flex items-center rounded-t-10px bg-#fff">
        <img :src="userStore.userInfo.avatar" class="ml20px h70% rounded-50%" alt="">
        <div class="ml40px h-full flex flex-1 flex-col justify-evenly">
          <p class="font-size-18px font-bold">
            {{ userStore.userInfo.username }}
          </p>
          <div>
            <span class="mr30px">{{ 0 }}关注</span>
            <span class="mr30px">{{ 0 }}粉丝</span>
            <span class="mr30px">{{ 0 }}获赞与收藏</span>
          </div>
          <div>简介：西湖论剑VIP用户</div>
        </div>
      </div>
      <!-- 数据总览 -->
      <div class="mt10px w-full bg-#fff p20px">
        <!-- 数据总览 -->
        <div class="h40px w-full flex items-center">
          <span class="inline-block h25px w5px bg-#00B4BC" />
          <span class="ml15px">数据总览</span>
        </div>
        <!-- 4个数据 -->
        <div class="mt10px h90px w-full flex justify-between">
          <div
            class="h-full w24% flex flex-col justify-evenly bg-#FBFBFB pl15px"
          >
            <p class="font-size-14px">
              新增粉丝
            </p>
            <p class="font-size-22px font-bold">
              267
            </p>
          </div>
          <div
            class="h-full w24% flex flex-col justify-evenly bg-#FBFBFB pl15px"
          >
            <p class="font-size-14px">
              主页访客
            </p>
            <p class="font-size-22px font-bold">
              798
            </p>
          </div>
          <div
            class="h-full w24% flex flex-col justify-evenly bg-#FBFBFB pl15px"
          >
            <p class="font-size-14px">
              观看数
            </p>
            <p class="font-size-22px font-bold">
              6260
            </p>
          </div>
          <div
            class="h-full w24% flex flex-col justify-evenly bg-#FBFBFB pl15px"
          >
            <p class="font-size-14px">
              互动数
            </p>
            <p class="font-size-22px font-bold">
              4267
            </p>
          </div>
        </div>
      </div>
      <!-- 最新发布笔记数据 -->
      <div class="mt10px w-full bg-#fff p20px">
        <!-- 最新发布笔记数据 -->
        <div class="h40px w-full flex items-center">
          <span class="inline-block h25px w5px bg-#00B4BC" />
          <span class="ml15px">最新发布笔记数据</span>
        </div>
        <!-- 笔记 -->
        <div class="mt20px h200px w-full">
          <div
            class="h-full w-160px border-2px border-#00B4BC rounded-10px border-solid"
          >
            <img src="/public/about/1.webp" alt="">
            <p class="p5px pt0px font-size-12px">
              西湖论剑，共话网络安全未来！
            </p>
          </div>
        </div>
      </div>
      <!-- 创作学院热门课程 -->
      <div class="mt10px w-full rounded-b-10px bg-#fff p20px">
        <!-- 创作学院热门课程 -->
        <div class="h40px w-full flex items-center">
          <span class="inline-block h25px w5px bg-#00B4BC" />
          <span class="ml15px">创作学院热门课程</span>
        </div>
        <!-- 笔记 -->
        <div class="mt20px h300px w-full flex">
          <div class="mr5px h-250px w-160px rounded-10px">
            <img
              class="h-full w-full rounded-10px"
              src="http://ci.xiaohongshu.com/spectrum/2f46e56762162236df02de81bd1a107deae8ade0?imageView2/2/w/1080/format/jpg"
              alt=""
            >
          </div>
          <div class="mr10px h-250px w-160px rounded-10px">
            <img
              class="h-full w-full rounded-10px"
              src="http://ci.xiaohongshu.com/spectrum/0ace094bff0f002c4b453191895c396988a9cbb9?imageView2/2/w/1080/format/jpg"
              alt=""
            >
          </div>
          <div class="mr10px h-250px w-160px rounded-10px">
            <img
              class="h-full w-full rounded-10px"
              src="http://ci.xiaohongshu.com/spectrum/e9a332a15b2ab70cd61a55fb2f8d1040f020e5e2?imageView2/2/w/1080/format/jpg"
              alt=""
            >
          </div>
          <div class="mr10px h-250px w-160px rounded-10px">
            <img
              class="h-full w-full rounded-10px"
              src="http://ci.xiaohongshu.com/spectrum/cd312bd2ccf0fbae02a8aabe6236b32cda162737?imageView2/2/w/1080/format/jpg"
              alt=""
            >
          </div>
        </div>
      </div>
    </div>
    <div class="ml2% w28% rounded-10px bg-#fff pb5px pl20px pr20px pt5px">
      <div
        class="h60px w-full flex items-center border-b-1px border-#F5F5F5 border-dashed"
      >
        <span class="inline-block h25px w5px bg-#00B4BC" />
        <span class="ml15px">笔记灵感</span>
      </div>
      <div
        class="mt15px w-full border-b-1px border-#F5F5F5 border-dashed pb15px"
      >
        <p>热门活动</p>
        <img
          class="mt15px"
          src="https://growth-img.xhscdn.com/ditto/104100n0311aqnh8hmg064lpb1g6r98o006f08fhdb6ss4"
          alt=""
        >
        <p class="mt10px">
          REDpet小红书宠物朋友
        </p>
        <p class="mt5px font-size-13px color-#8c8c8c">
          更多 >
        </p>
      </div>
      <div class="pt15px">
        <p class="pb15px">
          经典话题
        </p>
        <div v-for="(item, index) in list" :key="index" class="mb10px h30px w-full flex items-center">
          <span># {{ item.title }}</span>
          <span
            class="ml10px border-1px border-#8E8E8E rounded-5px border-solid pb1px pl2px pr2px pt1px font-size-10px color-#8E8E8E"
          >{{ item.type }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
