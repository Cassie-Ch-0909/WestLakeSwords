<script setup>
// mock data
const list = ref([
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
])
const list2 = ref([
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
  '/public/partner/1.webp',
])

// 定义一个flag，用来控制是否显示全部
const flag = ref(false)
// 定义一个按钮名称
const buttonName = ref('查看更多')
/*
    定义一个方法来控制flag是否显示以及按钮的名称
*/
function changeFlag() {
  flag.value = !flag.value
  if (flag.value)
    buttonName.value = '收起'

  else
    buttonName.value = '查看更多'
}
</script>

<template>
  <!-- PC端合作伙伴 -->
  <div
    class="mt[50px] w100% max-md:hidden"
  >
    <p class="left-0 ml10% h-[80px] w-80% font-size-[30px] font-bold">
      合作伙伴&nbsp;<span class="font-size-[23px]">Cooperative Partner</span>
    </p>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      生态合作伙伴
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      战略合作媒体
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <!-- 55+42 -->
    <p class="ml10% font-size-[20px] color-[#05BAB3] font-bold">
      新闻媒体
    </p>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="ml10% mr10% h-[120px] w-80% flex justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <el-button class="ml47%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
  <!-- 移动端合作伙伴 -->
  <div class="mt-[10px] w-full md-hidden">
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">生态合作伙伴</span>&nbsp;
      <span class="font-size-[12px]">Ecological partner</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list2" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">战略合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Strategic cooperative media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list2" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div class="h-[40px] w-full flex items-center">
      <span class="font-size-[20px] font-bold">合作媒体</span>&nbsp;
      <span class="font-size-[12px]">Partner Media</span>
    </div>
    <div class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list2" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <div v-if="flag" class="w-full flex flex-wrap justify-between">
      <span v-for="(item, index) in list" :key="index" class="h-full w-22%">
        <img class="h-full w-full" :src="item">
      </span>
    </div>
    <el-button class="ml47%" @click="changeFlag">
      {{ buttonName }}
    </el-button>
  </div>
</template>

<style scoped>

</style>
