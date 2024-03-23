<script setup>
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的收藏" />

    <!-- 每个订阅的议程 -->
    <MyComponents img="/public/activity/2.webp" title="西湖论剑网络特训营" type="掌上论剑" time="11:30-20:33" />
  </div>
</template>

<style scoped></style>
