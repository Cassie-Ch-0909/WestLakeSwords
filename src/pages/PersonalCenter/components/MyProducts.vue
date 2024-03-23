<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
import GoodsComponent from './GoodsComponent.vue'

const activeIndex = ref(0)
function changeActiveIndex(index) {
  activeIndex.value = index
}
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的商品" />
    <div class="mb10px mt10px h50px w-full flex items-center bg-#fff">
      <div
        :class="activeIndex === 0 ? 'border-b-3px border-[#00B4BC] border-solid color-[#00B4BC]' : ''"
        class="ml20px h-full w80px flex items-center justify-center font-size-16px font-bold"
        @click="changeActiveIndex(0)"
      >
        已购买
      </div>
      <div
        :class="activeIndex === 1 ? 'border-b-3px border-[#00B4BC] border-solid color-[#00B4BC]' : ''"
        class="ml20px h-full w80px flex items-center justify-center font-size-16px font-bold"
        @click="changeActiveIndex(1)"
      >
        已兑换
      </div>
    </div>
    <GoodsComponent
      v-show="activeIndex === 0"
      img="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg"
      title="2021年成都大运会赛事门票" desc="2021年成都大运会赛事门票" num="2100"
      logo="/public/personalInfonmation/alreadyBuy.png"
    />
    <GoodsComponent
      v-show="activeIndex === 1"
      img="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/014a39c8a5c440ccbb9549db8bb8c0af.jpg"
      title="2023数据安全能力洞察报告"
      desc="安恒信息围绕国家数字化建设“2522”顶层布局规划，洞悉各行业和各领域数字化转型中的安全挑战和能力需求，梳理切实解决数字安全本质问题的方法和途径，并从安全模式、架构、能力、产业等方向对未来数字安全发展进行了展望。"
      num="2100" logo="/public/personalInfonmation/alreadyExchange.png"
    />
  </div>
</template>

<style scoped></style>
