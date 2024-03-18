<script setup>
import { ref } from 'vue'

const relatedRecommendationList = ref([
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
    name: '李大兴', // 姓名
    content: '揭牌仪式1:致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
    name: '李大兴', // 姓名
    content: '揭牌仪式1:致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
  },
  {
    img: 'https://img2023.gcsis.cn/2023/5/f8fec48a39cb4d3ea6bdab7747885312.jpg', // 图片
    name: '李大兴', // 姓名
    content: '揭牌仪式1:致辞', // 内容
    goto: 'https://www.gcsis.cn/mediaVideo/549.html', // 点击之后跳转过去的网址
  },
])
</script>

<template>
  <!-- 右下方相关推荐 -->
  <div class="h600px w450px overflow-y-scroll">
    <div
      class="h40px w-full flex items-center justify-center from-[#1d7acf] to-[#59afb8] bg-gradient-to-r font-size-20px color-[#fff]"
    >
      相关推荐
    </div>
    <ul>
      <li
        v-for="(item, index) in relatedRecommendationList" :key="index"
        class="mt3px h210px w-full flex flex-col bg-green"
      >
        <img :src="item.img" alt="" class="w100%">
        <div class="flex flex-1 items-center justify-between from-[#6CB9F7] to-[#59afb8] bg-gradient-to-b color-[#fff]">
          <span class="pl5px font-size-14px">{{ item.content }}</span>
          <span class="pr5px font-size-12px">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
