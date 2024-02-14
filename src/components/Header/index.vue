<script setup>
import { ref } from 'vue'
import RotateBgButton from '@/components/Header/components/RotateBgButton.vue'

/* 定义一下导航栏的name url */
const navs = ref([
  { name: '首页', url: '/' },
  { name: '大会议程', url: '/home' },
  { name: '关于大会', url: '/jjy/cassie' },
  { name: '大咖云集', url: '/home' },
  { name: '精彩活动', url: '/home' },
  { name: '展商风采', url: '/home' },
  { name: '成果发布', url: '/home' },
  { name: '媒体中心', url: '/home' },
  { name: '参会指南', url: '/home' },
])

/*
    定义一个变量activeIndex用来标记导航栏高亮
    定义一个函数changeActiveIndex用来改变activeIndex的值
*/
const activeIndex = ref(0)
function changeActiveIndex(index) {
  activeIndex.value = index
}
</script>

<template>
  <!-- 导航条 -->
  <div class="h-20 w-full flex items-center justify-between bg-slate-50">
    <!-- logo -->
    <div class="left ml-40">
      <img src="@/assets/logo.png" alt="" class="h-4/5 w-4/5">
    </div>
    <div class="right mr-40 flex items-center justify-center text-sm">
      <template v-for="(item, index) in navs" :key="index">
        <router-link :to="`${item.url}`" class="mr-8" :class="index === activeIndex ? 'text-[#005AAD]' : ''" @click="changeActiveIndex(index)">
          {{ item.name }}
        </router-link>
      </template>
      <router-link to="/" class="mr-8">
        <RotateBgButton />
      </router-link>
      <div>
        <i class="iconfont icon-yonghu text-[#999999]" />&nbsp;
        <span class="text-xs text-[#999999]">登录</span>&nbsp;
        <span class="text-[#999999]">|</span>&nbsp;
        <span class="text-xs text-[#999999]">注册</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>"
