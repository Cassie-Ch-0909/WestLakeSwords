<script setup>
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
import GoodsComponent from './GoodsComponent.vue'
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的商品" />
    <GoodsComponent
      img="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg"
      title="2021年成都大运会赛事门票"
      desc="2021年成都大运会赛事门票"
      num="2100"
      logo="/public/personalInfonmation/alreadyBuy.png"
    />
  </div>
</template>

<style scoped></style>
