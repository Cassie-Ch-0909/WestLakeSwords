<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import RotateBgButton from '@/components/Header/components/RotateBgButton.vue'

const router = useRouter()// 用于页面的跳转

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

/* 定义一个函数用于页面跳转 */
function changeRouter(url) {
  router.push(url)
}
</script>

<template>
  <!--
      md:PC端
      其余：手机和ipad
      ()*4=px
   -->
  <div class="nav h-12.5 w-full flex justify-between bg-slate-50 md:h-20">
    <!-- logo -->
    <div class="leftLogo h100% w35% flex items-center justify-center md:ml-11% md:w-18%">
      <img src="@/assets/logo.png" alt="" class="h-auto w-auto pl5% pr5%">
    </div>
    <!-- 中间导航选项 PC端 -->
    <div class="center h-full w65% flex items-center justify-end max-md:hidden">
      <!-- <div v-for="(item, index) in navs" :key="index" class="h-full w-10% w-full flex items-center justify-center"> -->
      <router-link
        v-for="(item, index) in navs" :key="index" :to="`${item.url}`" class="mr3% inline-block text-[13.5px]"
        :class="index === activeIndex ? 'text-[#005AAD]' : ''" @click="changeActiveIndex(index)"
      >
        {{ item.name }}
      </router-link>
      <!-- </div> -->
    </div>
    <!-- 右边大会直播和iconfont目录折叠图标 移动端 -->
    <div class="rightSide h100% w34% flex items-center justify-evenly md:hidden">
      <RotateBgButton />
      <!-- 移动端下拉菜单导航条 -->
      <el-dropdown>
        <i class="iconfont icon-xiangmumulu bg-transparent text-[25px] text-[#2db1ba]" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              登陆注册
            </el-dropdown-item>
            <el-dropdown-item v-for="(item, index) in navs" :key="index">
              <span @click="changeRouter(item.url)">{{ item.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <!-- 右边大会直播和登陆注册 -->
    <div class="rightSide mr-8% h-full w17% flex items-center justify-between max-md:hidden">
      <RotateBgButton />
      <div class="ml6% flex items-center justify-center text-xs color-[#B0B0B0]">
        <i class="iconfont icon-yonghu" />&nbsp;
        <span>登录</span>&nbsp;
        <span>|</span>&nbsp;
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
</style>
