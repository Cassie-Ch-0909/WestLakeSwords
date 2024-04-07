<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
import { getUserCollectionListAPI } from '@/apis/user'

const myCollectionList = ref([])
async function getUserCollectionList() {
  const res = await getUserCollectionListAPI()
  // console.log(res)
  myCollectionList.value = res.data
}
getUserCollectionList()
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的收藏" />

    <!-- 每个订阅的议程 -->
    <div class="flex flex-wrap">
      <MyComponents
        v-for="(item, index) in myCollectionList"
        :key="index"
        :img="item.img"
        :title="item.title"
        :type="item.type"
        :time="item.time"
      />
    </div>
  </div>
</template>

<style scoped></style>
