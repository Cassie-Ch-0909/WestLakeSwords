<script setup>
import RightDetails from './components/RightDetails.vue'
import UserComment from './components/UserComment.vue'
import RelatedRecommendation from './components/RelatedRecommendation.vue'
import { getAgendaByIdAPI } from '@/apis/agenda'

// 移动端的点赞收藏保存转发
// const iconList = ref(
//   [
//     {
//       icon: 'icon-dianzan_kuai',
//       name: 8995,
//     },
//     {
//       icon: 'icon-toubi-copy',
//       name: '投币',
//     },
//     {
//       icon: 'icon-shoucang',
//       name: '收藏',
//     },
//     {
//       icon: 'icon-zhuanfa',
//       name: '转发',
//     },
//     {
//       icon: 'icon-icon204',
//       name: 5677,
//     },
//     {
//       icon: 'icon-baocundaobendi',
//       name: '保存',
//     },
//   ],
// )

/*
    定义函数和变量来实现点赞和取消点赞功能
*/
// const iconActiveIndex = ref()
// const iconActiveFlag = ref(false)
// function selectIconOperate(index) {
//   if (index === 0 && !iconActiveFlag.value) {
//     iconActiveIndex.value = index
//     iconList.value[0].name++
//     iconActiveFlag.value = true
//   }
//   else {
//     iconList.value[0].name--
//     iconActiveFlag.value = false
//     iconActiveIndex.value = 9
//   }
// }

// TODO1: 获取路由参数 发请求获取当前页的大会详情
const route = useRoute()
// 在组件挂载完成后通过 route.query.属性名 接收参数
// console.log(route.query.id)

const agendaDetails = ref()
// TODO2: 发请求获取路由参数
async function getAgendaById(id) {
  const res = await getAgendaByIdAPI(id)
  // console.log(res)
  agendaDetails.value = res.data
  // TODO: 获取数据库图片进行渲染
  // console.log(agendaDetails.value)
}
getAgendaById(route.query.id)
</script>

<template>
  <!-- PC端会议详情 -->
  <div class="bg mb50px w-full bg-contain bg-top bg-no-repeat max-md:hidden">
    <div class="ml10% mr10% flex justify-between pt20px">
      <video controls width="860" height="450" class="mt-[-50px]">
        <source src="/public/video.mp4">
      </video>
      <RightDetails />
    </div>
    <div class="ml10% mr10% flex justify-between pt20px">
      <UserComment v-if="agendaDetails" :details="agendaDetails" />
      <RelatedRecommendation />
    </div>
  </div>
  <!-- 移动端会议详情 -->
  <!-- <div class="w-full md:hidden"> -->
  <!-- <div class="h-50px w-full flex items-center justify-center font-size-[18px] color-[#00B4BC] font-bold"> -->
  <!-- <p> -->
  <!-- 教育技术产业融合创新发展论坛 -->
  <!-- </p> -->
  <!-- </div> -->
  <!-- <video controls width="375" height="300"> -->
  <!-- <source src="/public/video.mp4"> -->
  <!-- </video> -->
  <!-- 点赞投币。。。 -->
  <!-- <div class="mt-[10px] h80px w-full flex items-center justify-between pl30px pr30px"> -->
  <!-- <div
        v-for="(item, index) in iconList" :key="index" class="flex flex-col color-[#00B4BC] hover:color-[#00F5FF]"
        :class="iconActiveIndex === index ? 'color-[#00F5FF]' : ''" @click="selectIconOperate(index)"
      > -->
  <!-- <i :class="item.icon" class="iconfont font-size-20px" /> -->
  <!-- <span class="font-size-12px">{{ item.name }}</span> -->
  <!-- </div> -->
  <!-- </div> -->
  <!-- 评论 -->
  <!-- <div class="w-full flex items-center justify-center font-size-[18px]"> -->
  <!-- <UserComment /> -->
  <!-- </div> -->
  <!-- </div> -->
</template>

<style scoped>
.bg {
  background-image: url('https://www.gcsis.cn/uploadfile/70766e1f103340fd8e48ea8802702caa.jpg');
}
</style>
