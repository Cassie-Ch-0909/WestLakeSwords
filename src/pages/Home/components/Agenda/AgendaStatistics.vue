<script setup>
// 我最爱写备注了~
// 好的。
function getImageUrl(name) {
  return new URL(`/src/assets/icon/${name}.png`, import.meta.url).href
}
const list = ref([
  {
    num: 10,
    name: '平行论坛',
    pic: getImageUrl('talk'),
  },
  {
    num: 1,
    name: '科普论坛',
    pic: getImageUrl('science'),
  },
  {
    num: 8,
    name: '掌上论剑',
    pic: getImageUrl('mobile2'),
  },
  {
    num: 1,
    name: '生态合作论坛',
    pic: getImageUrl('shengTai'),
  },
])
</script>

<template>
  <!-- PC端大会议程 -->
  <div
    class="animation-delay-1 animate__slideInLeft wow relative h100% w35% flex flex-col animate-duration-2500 items-center justify-center max-md-hidden"
  >
    <div class="absolute left-0 top-7% font-size-[30px] font-bold">
      大会议程
      <span class="font-size-[23px]">Conference Agenda</span>
    </div>
    <div class="mb5% h30% w100% flex justify-between">
      <div class="relative h100% w49% rounded-[10px] from-[#70E9E4] to-[#139AE6] bg-gradient-to-t">
        <div class="ml5%">
          <span class="font-size-[60px] color-white font-bold">10</span>
          <span class="font-size-[20px] color-white font-bold"> 场</span><br>
          <span class="font-size-[20px] color-white font-bold">平行论坛</span>
        </div>
        <img src="@/assets/icon/talk.png" alt="" class="absolute bottom-5% right-3% w47%">
      </div>
      <div class="relative h100% w49% rounded-[10px] from-[#70E9E4] to-[#139AE6] bg-gradient-to-t">
        <div class="ml5%">
          <span class="font-size-[60px] color-white font-bold">1</span>
          <span class="font-size-[20px] color-white font-bold"> 场</span><br>
          <span class="font-size-[20px] color-white font-bold">科普论坛</span>
        </div>
        <img src="@/assets/icon/science.png" alt="" class="absolute bottom-5% right-1% w56%">
      </div>
    </div>
    <div class="mb5% h30% w100% flex justify-between">
      <div class="relative h100% w49% rounded-[10px] from-[#70E9E4] to-[#139AE6] bg-gradient-to-t">
        <div class="ml5%">
          <span class="font-size-[60px] color-white font-bold">8</span>
          <span class="font-size-[20px] color-white font-bold"> 场</span><br>
          <span class="font-size-[20px] color-white font-bold">掌上论剑</span>
        </div>
        <img src="@/assets/icon/mobile2.png" alt="" class="absolute bottom-5% right-1% w56%">
      </div>
      <div class="relative h100% w49% rounded-[10px] from-[#70E9E4] to-[#139AE6] bg-gradient-to-t">
        <div class="ml5%">
          <span class="font-size-[60px] color-white font-bold">1</span>
          <span class="font-size-[20px] color-white font-bold"> 场</span><br>
          <span class="font-size-[20px] color-white font-bold">生态合作论坛</span>
        </div>
        <img src="@/assets/icon/shengTai.png" alt="" class="absolute bottom-5% right-1% w56%">
      </div>
    </div>
  </div>

  <!-- 移动端大会议程 -->
  <div class="mt-[20px] h-[150px] w-full md-hidden">
    <div class="h-25% w-full">
      <div class="h-25% w-full">
        <span class="font-size-[20px] font-bold">大会议程</span>&nbsp;
        <span class="font-size-[12px]">Conference Agenda</span>
      </div>
    </div>
    <div class="h-75% w-full flex justify-between">
      <div
        v-for="(item, index) in list " :key="index"
        class="relative h-full w23% rounded-[10px] from-[#70E9E4] to-[#139AE6] bg-gradient-to-t"
      >
        <span class="ml5% font-size-[30px] color-white font-bold">{{ item.num }}</span>
        <span class="color-white font-bold"> 场</span>
        <p class="mt3% font-size-[14px] color-white font-bold">
          {{ item.name }}
        </p>
        <img :src="item.pic" alt="" class="absolute bottom-5% right-5% w50%">
      </div>
    </div>
  </div>
</template>

<style scoped></style>
