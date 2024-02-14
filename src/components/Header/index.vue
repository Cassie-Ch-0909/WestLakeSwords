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
    <div class="left ml-40 h-full w-17.5% flex items-center justify-center">
      <img src="@/assets/logo.png" alt="" class="h-auto w-95%">
    </div>
    <div class="right mr-40 h-full w-82.5% flex items-center justify-end text-sm">
      <div class="h-full w-70% flex">
        <div v-for="(item, index) in navs" :key="index" class="h-full w-10% w-full flex items-center justify-center">
          <router-link
            :to="`${item.url}`" class="inline-block text-[13px]"
            :class="index === activeIndex ? 'text-[#005AAD]' : ''" @click="changeActiveIndex(index)"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
      <div class="h-full w-10% flex items-center justify-center">
        <RotateBgButton />
      </div>
      <div class="h-full w-10% flex items-center justify-center text-[12px] color-[#B0B0B0]">
        <i class="iconfont icon-yonghu" />&nbsp;
        <span>登录</span>&nbsp;
        <span>|</span>&nbsp;
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>"
