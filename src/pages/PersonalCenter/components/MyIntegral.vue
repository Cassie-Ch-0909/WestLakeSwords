<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import Echarts from './Echarts.vue'
import { getUserIntegraDetailslListAPI } from '@/apis/user'

// 积分明细列表
const userIntegraDetailsList = ref([])
async function getUserIntegraDetailslList() {
  const res = await getUserIntegraDetailslListAPI()
  // console.log(res.data)
  userIntegraDetailsList.value = res.data
}
getUserIntegraDetailslList()
</script>

<template>
  <div class="mt10px h600px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的积分" />
    <div class="mt10px w-full bg-#fff">
      <!-- 积分明细以及Echarts图表统计 -->
      <div class="w-full flex">
        <div class="h450px w-55% overflow-y-scroll p10px">
          <p class="font-size-20px font-bold">
            积分明细
          </p>
          <div class="mb5px mt5px flex justify-between font-size-13px color-#999">
            <span class="">时间</span>
            <span class="ml95px">操作</span>
            <span class="">积分变动</span>
          </div>
          <div v-for="(item, index) in userIntegraDetailsList" :key="index" :class="index % 2 === 0 ? 'bg-#F9FBFC' : 'bg-#fff'" class="h40px w-full flex items-center justify-between font-size-13px">
            <span class="">{{ item.time }}</span>
            <span class="">{{ item.operation }}</span>
            <span class="">+{{ item.integral }}</span>
          </div>
        </div>
        <Echarts />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
