<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import RotateBgButton from '@/components/Header/components/RotateBgButton.vue'
import { getCaptchaAPI, getPhoneCodeAPI, loginAPI } from '@/apis/login'

const router = useRouter()// 用于页面的跳转

/* 定义一下导航栏的name url */
const navs = ref([
  { name: '首页', url: '/' },
  { name: '大会议程', url: '/agenda' },
  { name: '关于大会', url: '/about' },
  { name: '大咖云集', url: '/bignames' },
  { name: '精彩活动', url: '/wonderfulactivities' },
  { name: '展商风采', url: '/exhibitorstyle' },
  { name: '成果发布', url: '/achievementrelease' },
  { name: '媒体中心', url: '/mediacenter' },
  { name: '参会指南', url: '/fingerpost' },
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

/*
    移动端点击登陆注册 跳转到登陆注册页面
*/
function gotoLogin() {
  router.push('/mobilelogin')
}

/*
    定义一个变量用来控制登陆注册的Dialog的显示和隐藏
*/
const dialogTableVisible = ref(false)

// 图形验证码图片的src
const captcha = ref('')
// 输入框的电话号码
const phoneNumer = ref('')
// 输入框的短信验证码
const phoneCode = ref('')
// 输入框的图形验证码
const captchaValue = ref('')
// 登录时uuid的值
const uuid = ref('')

// TODO1： 验证输入框手机号的输入  手机号非空判断和格式判断
function checkPhoneNumber() {
  if (phoneNumer.value === '') {
    ElMessage({
      message: '手机号输入不能为空',
      type: 'error',
    })
    return false
  }
  const reg = /^1[3456789]\d{9}$/
  if (!reg.test(phoneNumer.value)) {
    ElMessage({
      message: '手机号格式错误',
      type: 'error',
    })
    return false
  }
  return true
}

// 短信倒计时秒数的最大值
const totalSecond = ref(60)
// 短信倒计时的秒数
const second = ref(60)
// 短信倒计时定时器的id
const timer = ref(null)

// TODO2：调接口获取短信验证码 发送短信到手机
async function getPhoneCode() {
  if (checkPhoneNumber()) {
    // 倒计时
    if (!timer.value && second.value === totalSecond.value) {
      // 开启倒计时
      timer.value = setInterval(() => {
        // 短信倒计时秒数 减1
        second.value--
        // 当秒数小于1时，清除计时器，将秒数设置为初始值(最大值)60
        if (second.value < 1) {
          clearInterval(timer.value)
          timer.value = null
          second.value = totalSecond.value
        }
      }, 1000)
      // 发请求获取验证码
      await getPhoneCodeAPI(phoneNumer.value)
      // message提示用户短信内容
      ElMessage({
        message: '发送短信验证码成功，请注意查收短信',
        type: 'success',
      })
    }
  }
}

// TODO3：验证短信验证码输入  短信验证码非空判断 （在点登录的时候触发即可）
function checkPhoneCode() {
  if (phoneCode.value === '') {
    ElMessage({
      message: '短信验证码不能为空',
      type: 'error',
    })
    return false
  }
  return true
}

// TODO4: 调接口获取图形验证码以及点击图形验证码会切换
async function getCaptcha() {
  // await getCaptchaAPI()
  const res = await getCaptchaAPI()
  captcha.value = `data:image/png;base64,${res.img}`
  uuid.value = res.uuid
  // console.log(uuid.value)
}
getCaptcha()
function changeCaptcha() {
  getCaptcha()
}

// TODO5：验证图形验证码输入  图形验证码非空判断 （在点登录的时候触发即可）
function checkCaptchaValue() {
  if (captchaValue.value === '') {
    ElMessage({
      message: '图形验证码不能为空',
      type: 'error',
    })
    return false
  }
  return true
}

// TODO6: 点击登录按钮后判断三个输入框的信息是否非空，如果非空，调登录接口
async function login() {
  if (checkPhoneNumber() && checkPhoneCode() && checkCaptchaValue()) {
    // console.log('可以调登录接口啦')
    const res = await loginAPI(
      {
        captcha: captchaValue.value,
        phone: phoneNumer.value,
        phoneCode: phoneCode.value,
        uuid: uuid.value,
      },
    )
    // console.log(res)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('userInfo', res.data.userName)
  }
}

/*
    页面销毁时，清除计时器
*/
onUnmounted(() => {
  clearInterval(timer.value)
})
</script>

<template>
  <!--
      md:PC端
      其余：手机和ipad
      ()*4=px
   -->
  <!-- PC端Header -->
  <div class="nav sticky left-0 top-0 z-999 w-full flex justify-between bg-slate-50 max-md:hidden md:h-20">
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
              v-model="phoneNumer"
              class="h40px w240px border-1px border-#E0E0E0 border-solid pl10px font-size-12px" placeholder="请输入手机号码"
            >
          </div>
          <!-- 请输入短信验证码 -->
          <div class="ml60px mt20px h40px w240px flex border-1px border-#E0E0E0 border-solid">
            <input v-model="phoneCode" class="h40px w140px pl10px font-size-12px" placeholder="输入短信验证码">
            <button class="inline-block h40px w100px font-size-11.5px" @click="getPhoneCode">
              {{ second === totalSecond ? "获取验证码" : `${second}秒后重新发送` }}
            </button>
          </div>
          <!-- 请输入图形验证码 -->
          <div class="ml60px mt20px h40px w240px flex border-1px border-#E0E0E0 border-solid">
            <input v-model="captchaValue" class="h40px w140px pl10px font-size-12px" placeholder="输入图形验证码">
            <img :src="captcha" class="inline-block h40px w100px" alt="" @click="changeCaptcha">
          </div>
          <div class="mt15px h30px w-full flex items-center pl60px font-size-12px">
            <input id="scales" type="checkbox" name="scales" checked class="mr5px">
            <span>我已阅读并同意<a class="color-#198CFF" href="#">服务条款</a>、<a class="color-#198CFF" href="#">隐私政策</a></span>
          </div>
          <button
            class="ml60px mt15px h40px w240px from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff"
            @click="login"
          >
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

    <!-- logo -->
    <div class="leftLogo h100% flex items-center justify-center md:ml-11% md:w-18%">
      <img src="@/assets/logo.png" alt="" class="h-auto w-auto pl5% pr5%">
    </div>
    <!-- 中间导航选项 PC端 -->
    <div class="center h-full w65% flex items-center justify-end">
      <!-- <div v-for="(item, index) in navs" :key="index" class="h-full w-10% w-full flex items-center justify-center"> -->
      <router-link
        v-for="(item, index) in navs" :key="index" :to="`${item.url}`"
        class="mr3% inline-block text-[13.5px]" :class="index === activeIndex ? 'text-[#005AAD]' : ''"
        @click="changeActiveIndex(index)"
      >
        {{ item.name }}
      </router-link>
      <!-- </div> -->
    </div>
    <!-- 右边大会直播和登陆注册 -->
    <div class="rightSide mr-8% h-full w17% flex items-center justify-between">
      <RotateBgButton />
      <div class="ml6% flex items-center justify-center text-xs color-[#B0B0B0]" @click="dialogTableVisible = true">
        <i class="iconfont icon-yonghu" />&nbsp;
        <span>登录</span>&nbsp;
        <span>|</span>&nbsp;
        <span>注册</span>
      </div>
    </div>
  </div>

  <!-- 移动端Header -->
  <div class="nav sticky left-0 top-0 z-999 h-[53px] w-full flex justify-between bg-slate-50 md-hidden">
    <!-- logo -->
    <div class="leftLogo h100% w35% flex items-center justify-center">
      <img src="@/assets/logo.png" alt="" class="h-auto w-auto pl5% pr5%">
    </div>
    <!-- 右边大会直播和iconfont目录折叠图标 移动端 -->
    <div class="rightSide h100% w34% flex items-center justify-evenly">
      <RotateBgButton />
      <!-- 移动端下拉菜单导航条 -->
      <el-dropdown>
        <i class="iconfont icon-xiangmumulu bg-transparent text-[25px] text-[#2db1ba]" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="gotoLogin">
              登陆注册
            </el-dropdown-item>
            <el-dropdown-item v-for="(item, index) in navs" :key="index">
              <span @click="changeRouter(item.url)">{{ item.name }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
