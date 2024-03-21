<script setup>
import { useScroll } from '@vueuse/core'
import { useRoute } from 'vue-router'
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import { useGlobalProvide } from '@/hooks/useGlobalContext'

useGlobalProvide()
const { y } = useScroll(window)

function scrollToTop() {
  window.scrollTo({
    // top: document.documentElement.offsetHeight, //回到底部
    top: 0, // 回到顶部
    left: 0,
    behavior: 'smooth', // smooth 平滑；auto:瞬间
  })
}
// async function login() {
//   const { data } = await loginAPI({
//     username: 'zhangsan',
//     password: '123456',
//   })
//   console.log(data)
// }
// login()

const route = useRoute()
const footerFlag = ref(true)
// 监听当前路由变化
watch(() => route.path, (newPath) => {
  if (newPath === '/mobilelogin')
    footerFlag.value = false

  else
    footerFlag.value = true
}, { immediate: true, deep: true })
</script>

<template>
  <main>
    <Header />
    <div
      v-show="y > 50"
      class="animation-delay-1 animate__fadeInRight wow fixed right-0px top-175px z-999 h485px w100px flex flex-col animate-duration-2000 justify-between rounded-l-lg bg-blue from-[#2DB0BA] to-[#2B78BB] bg-gradient-to-b max-md:hidden"
    >
      <div class="h20% flex flex-col items-center justify-center color-[#fff]">
        <i class="iconfont icon-fenxiang font-size-32px" />
        <p class="font-size-14px">
          分享海报
        </p>
      </div>
      <div class="h20% flex flex-col items-center justify-center color-[#fff]">
        <i class="iconfont icon-mn_dingyue font-size-32px" />
        <p class="font-size-14px">
          我的订阅
        </p>
      </div>
      <div class="h20% flex flex-col items-center justify-center color-[#fff]">
        <i class="iconfont icon-hudongyouli-xuanzhongbeifen font-size-32px" />
        <p class="font-size-14px">
          互动有礼
        </p>
      </div>
      <div class="h20% flex flex-col items-center justify-center color-[#fff]">
        <i class="iconfont icon-xiaochengxu font-size-32px" />
        <p class="font-size-14px">
          小程序访问
        </p>
      </div>
      <div class="h20% flex flex-col items-center justify-center color-[#fff]" @click="scrollToTop">
        <i class="iconfont icon-fanhuidingbu font-size-32px" />
        <p class="font-size-14px">
          返回顶部
        </p>
      </div>
    </div>
    <RouterView />
    <Footer v-if="footerFlag" />
  </main>
</template>

<style scoped></style>
