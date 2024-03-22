<script lang="ts" setup>
import { ref } from 'vue'

const dialogTableVisible = ref(false)
</script>

<template>
  <el-button plain @click="dialogTableVisible = true">
    Open a Table nested Dialog
  </el-button>

  <el-dialog v-model="dialogTableVisible" width="800">
    <div class="relative flex">
      <!-- 左边输入框部分 -->
      <div class="h420px w56%">
        <!--  | 手机短信登陆 -->
        <div class="h35px w-full flex items-center pl60px">
          <span class="h22px w3px bg-#2DB1BA" />
          <p class="pl10px font-size-19px font-bold">
            手机短信登陆
          </p>
        </div>
        <!-- 请输入手机号码 -->
        <div class="mt30px h40px w-full pl60px">
          <input
            class="h40px w240px border-1px border-#E0E0E0 border-solid pl10px font-size-12px"
            placeholder="请输入手机号码"
          >
        </div>
        <!-- 请输入短信验证码 -->
        <div class="ml60px mt20px h40px w240px flex border-1px border-#E0E0E0 border-solid">
          <input class="h40px w140px pl10px font-size-12px" placeholder="输入短信验证码">
          <button class="inline-block h40px w100px font-size-11.5px">
            59秒后重新发送
          </button>
        </div>
        <!-- 请输入图形验证码 -->
        <div class="ml60px mt20px h40px w240px flex border-1px border-#E0E0E0 border-solid">
          <input class="h40px w140px pl10px font-size-12px" placeholder="输入图形验证码">
          <button class="inline-block h40px w100px font-size-11.5px">
            59秒后重新发送
          </button>
        </div>
        <div class="mt15px h30px w-full flex items-center pl60px font-size-12px">
          <input id="scales" type="checkbox" name="scales" checked class="mr5px">
          <span>我已阅读并同意<a class="color-#198CFF" href="#">服务条款</a>、<a class="color-#198CFF" href="#">隐私政策</a></span>
        </div>
        <button class="ml60px mt15px h40px w240px from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff">
          登录/注册
        </button>
        <!-- 其他登陆方式 -->
        <div class="mt10px h30px w-full flex items-center pl60px font-size-12px">
          <span>其他登陆方式</span>
          <i class="iconfont icon-weibo ml15px" />
        </div>
      </div>
      <!-- 右边微信扫码部分 -->
      <div class="h420px flex-1">
        <!--  | 扫码登陆 -->
        <div class="h35px w-full flex items-center pl80px">
          <span class="h22px w3px bg-#2DB1BA" />
          <p class="pl10px font-size-19px font-bold">
            扫码登陆
          </p>
        </div>
        <!-- 使用微信快速扫码登陆 -->
        <div class="mt10px h30px w-full flex items-center pl80px font-size-12px">
          <p>使用<span class="color-#00B4BC">微信</span>快速扫码登陆</p>
        </div>
        <!-- 二维码 -->
        <div class="ml60px mt20px w-80%">
          <img class="w220px" src="/public/login/loginQRCode.png" alt="">
        </div>
      </div>
      <!-- 中间灰色线条 -->
      <div class="absolute left-400px top-25px h300px w1px bg-#E0E0E0" />
      <!-- 底部文字 -->
      <div class="absolute bottom-15px left-250px font-size-12px color-#999">
        登录视为您已同意第三方账号绑定协议、服务条款、隐私政策
      </div>
    </div>
  </el-dialog>
</template>

<style scoped></style>
