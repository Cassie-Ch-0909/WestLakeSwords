<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
import { getUserSubscriptionListAPI } from '@/apis/user'

/*
    获取用户订阅的大会议程列表
*/
const mySubscriptionList = ref([])
async function getUserSubscriptionList() {
  const res = await getUserSubscriptionListAPI()
  // console.log(res)
  mySubscriptionList.value = res.data
}
getUserSubscriptionList()
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的订阅" />

    <!-- 每个订阅的议程 -->
    <div class="flex flex-wrap">
      <MyComponents v-for="(item, index) in mySubscriptionList" :key="index" :img="item.img" :title="item.title" :type="item.type" :time="item.time" />
    </div>
  </div>
</template>

<style scoped></style>
