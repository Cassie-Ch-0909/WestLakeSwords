<script setup>
import { ref } from 'vue'

const list = ref([
  {
    name: '市景',
    icon: 'icon-shi',
  },
  {
    name: '花园',
    icon: 'icon-kongzhonghuayuan',
  },
  {
    name: '游泳池',
    icon: 'icon-youyongchi',
  },
  {
    name: '免费停车',
    icon: 'icon-mianfeitingche',
  },
  {
    name: '浴缸',
    icon: 'icon-yugang',
  },
  {
    name: '空调',
    icon: 'icon-kongtiao',
  },
  {
    name: '24小时前台',
    icon: 'icon-24xiaoshiqiantai',
  },
  {
    name: '刷卡进门',
    icon: 'icon-suo',
  },
  {
    name: '每日客房打扫',
    icon: 'icon-dasao',
  },
  {
    name: '禁烟客房',
    icon: 'icon-jinyan1',
  },
])
</script>

<template>
  <!-- PC端大会场馆 -->
  <div class="w-full">
    <!-- 杭州洲际酒店 -->
    <p class="mb20px mt40px font-size-22px color-[#00B4BC] font-bold">
      杭州洲际酒店
    </p>
    <div class="h400px w-full flex">
      <div class="h100% bg-blue">
        <img
          class="h-full"
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/245807411.jpg?k=643da2ec12f97868098ebd5cf9be403636759e2c109d415eb52864a3909b3314&o=&hp=1"
          alt=""
        >
      </div>
      <div class="bg h100% flex-1 border-2px border-l-0 border-#00B4BC border-solid bg-contain bg-left bg-no-repeat">
        <p class="p15px">
          杭州洲际酒店位于风景秀丽的杭州钱江中央商务区。酒店紧邻地铁市政中心站（4号线和7号线）。酒店坐落在一栋设计独特的壮观金色建筑内。客房和花园享有钱塘江的美丽景致。
        </p>
        <div class="flex flex-wrap pl20px pt50px">
          <div
            v-for="(item, index) in list" :key="index"
            class="mb10px ml10px mr10px h45px w170px flex items-center border-1px border-black border-solid"
          >
            <i :class="item.icon" class="iconfont icon-24xiaoshiqiantai pl5px pr5px font-size-27px" />
            {{ item.name }}
          </div>
        </div>
      </div>
      <div />
    </div>
    <!-- 会场平面图 -->
    <p class="mb20px mt60px font-size-22px color-[#00B4BC] font-bold">
      会场平面图
    </p>
    <img class="w-full" src="https://img2023.gcsis.cn/2023/5/ddd7d65178194490ae1f576865602b50.jpg" alt="">
  </div>
</template>

<style scoped>
.bg {
  background-image: url('/public/bg/2.png');
}
</style>
