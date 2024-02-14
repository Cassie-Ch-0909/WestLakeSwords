<script setup>
import RotateBgButton from '@/components/Header/components/RotateBgButton.vue'
</script>

<template>
  <!-- 导航条 -->
  <div class="h-20 w-full flex items-center justify-between bg-slate-50">
    <!-- logo -->
    <div class="left ml-40">
      <img src="@/assets/logo.png" alt="" class="h-4/5 w-4/5">
    </div>
    <div class="right mr-40 flex items-center justify-center text-sm">
      <router-link to="/" class="mr-8">
        首页
      </router-link>
      <router-link to="/" class="mr-8">
        大会议程
      </router-link>
      <router-link to="/" class="mr-8">
        关于大会
      </router-link>
      <router-link to="/" class="mr-8">
        大咖云集
      </router-link>
      <router-link to="/" class="mr-8">
        精彩活动
      </router-link>
      <router-link to="/" class="mr-8">
        展商风采
      </router-link>
      <router-link to="/" class="mr-8">
        成果发布
      </router-link>
      <router-link to="/" class="mr-8">
        媒体中心
      </router-link>
      <router-link to="/" class="mr-8">
        参会指南
      </router-link>
      <router-link to="/" class="mr-8">
        <RotateBgButton />
      </router-link>
      <div>
        登陆注册
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>"
