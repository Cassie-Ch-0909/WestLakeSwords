<script setup>
import { useRouter } from 'vue-router'

/*
    移动端点击左上角返回按钮跳转到Home页面
*/
const router = useRouter()
function gotoHome() {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="relative w-full md:hidden">
    <div class="bg relative h-500px w-600px">
      <!-- 头部导航条 -->
      <div class="h50px w-full flex items-center justify-between">
        <div class="flex items-center color-#fff" @click="gotoHome">
          <i class="iconfont icon-changyongicon- font-size-25px" />
          <span class="">返回</span>
        </div>
      </div>
      <p
        class="absolute bottom-140px left-0 h150px w-50% flex flex-col justify-center pl20px font-size-20px color-#fff font-bold"
      >
        欢迎来到西湖论剑！
      </p>
      <!-- Welcome WestLakeSwords -->
      <div
        class="absolute bottom-220px left-0 h150px w-50% flex flex-col justify-center pl20px font-size-35px color-#fff font-bold"
      >
        <p>Welcome</p>
        <p>WestLakeSwords</p>
      </div>
    </div>
    <div class="absolute left-0 top-350px h500px w-full rounded-50px bg-#fff pl7% pr7%">
      <div class="mt50px h50px w-full flex items-center font-size-25px color-#00B4BC font-bold">
        登录/注册
      </div>
      <div class="h80px w-full flex items-center">
        <input
          type="text" placeholder="请输入您的手机号"
          class="h55px w-full border-2px border-#00B4BC rounded-30px border-solid pl20px font-size-15px"
        >
      </div>
      <div class="mt-[-12px] h80px w-full flex items-center justify-between">
        <input
          type="text" placeholder="请输入短信验证码"
          class="h55px w-62% border-2px border-#00B4BC rounded-30px border-solid pl20px font-size-15px"
        >
        <div class="ml10px h55px flex flex-1 items-center justify-center bg-#00B4BC font-size-14px color-#fff">
          59秒后重新发送
        </div>
      </div>
      <div class="mt-[-12px] h80px w-full flex items-center justify-between">
        <input
          type="text" placeholder="请输入图形验证码"
          class="h55px w-62% border-2px border-#00B4BC rounded-30px border-solid pl20px font-size-15px"
        >
        <div class="ml10px h55px flex flex-1 items-center justify-center bg-#00B4BC font-size-14px color-#fff">
          59秒后重新发送
        </div>
      </div>
      <div class="mt5px h20px w-full flex justify-end color-[#00B4BC]">
        忘记密码？
      </div>
      <button class="mt15px h55px w-full rounded-30px from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff">
        登录/注册
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url('https://www.gcsis.cn/img/bg_index.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
