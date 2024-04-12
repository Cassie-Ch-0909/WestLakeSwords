<script setup>
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import RotateBgButton from './components/RotateBgButton.vue'
import SignInRotateBgButton from './components/SignInRotateBgButton.vue'
import DynamicTime from './components/DynamicTime.vue'

// 我的订阅
import MySubscriptions from './components/MySubscriptions.vue'

// 我的点赞
import MyThumbsUp from './components/MyThumbsUp.vue'

// 我的收藏
import MyCollection from './components/MyCollection.vue'

// 我的商品
import MyProducts from './components/MyProducts.vue'

// 我的积分
import MyIntegral from './components/MyIntegral.vue'

// 好物商城
import GoodThingsMall from './components/GoodThingsMall.vue'

// 积分抽奖
import IntegralLottery from './components/IntegralLottery.vue'

// 拍照打卡
import TakePhotos from './components/TakePhotos.vue'

// 已报名的活动
import MyActivities from './components/MyActivities.vue'

// 个性化定制
import Personalized from './components/Personalized.vue'

// 趣味活动
import FunActivities from './components/FunActivities.vue'

// 热点话题讨论
// import HotTopicDiscussion from './components/HotTopicDiscussion.vue'
import { useTwelveStore } from '@/stores/twelve.js'
import { useUserStore } from '@/stores/user.js'
import { getCategoryRulesListAPI } from '@/apis/category.js'
import { everyDaySignInAPI } from '@/apis/user.js'
import { signInStatusStore } from '@/stores/signInStatus.js'

const signInStatus = signInStatusStore()

/*
    定义一个变量用来切换是否签到的按钮状态 => 后来已经存储到signInStatusStore中了
*/
// const isSignInFlag = ref(true)

/*
    定义个人信息12个模块
*/
const list = ref([
  {
    name: '我的订阅',
    img: '/public/personalInfonmation/dingyue.png',
    img2: '/public/personalInfonmation/dingyue.png',
    english: 'My Subscriptions',
    hoverImg: '/public/personalInfonmation/2dingyue.png',
    showMoudleFlag: false,
  },
  {
    name: '我的点赞',
    img: '/public/personalInfonmation/dianzan.png',
    img2: '/public/personalInfonmation/dianzan.png',
    hoverImg: '/public/personalInfonmation/2dianzan.png',
    english: 'My thumbs up',
    showMoudleFlag: false,
  },
  {
    name: '我的收藏',
    img: '/public/personalInfonmation/shoucang.png',
    img2: '/public/personalInfonmation/shoucang.png',
    hoverImg: '/public/personalInfonmation/2shoucang.png',
    english: 'My Collection',
    showMoudleFlag: false,
  },
  {
    name: '我的商品',
    img: '/public/personalInfonmation/myShangpin.png',
    img2: '/public/personalInfonmation/myShangpin.png',
    hoverImg: '/public/personalInfonmation/2wodeshangpin.png',
    english: 'My products',
    showMoudleFlag: false,
  },
  {
    name: '我的积分',
    img: '/public/personalInfonmation/wodejifen.png',
    img2: '/public/personalInfonmation/wodejifen.png',
    hoverImg: '/public/personalInfonmation/2wodejifen.png',
    english: 'My integral',
    showMoudleFlag: false,
  },
  {
    name: '好物商城',
    img: '/public/personalInfonmation/store.png',
    img2: '/public/personalInfonmation/store.png',
    hoverImg: '/public/personalInfonmation/2store.png',
    english: 'Good things mall',
    showMoudleFlag: false,
  },
  {
    name: '积分抽奖',
    img: '/public/personalInfonmation/jifenchoujiang.png',
    img2: '/public/personalInfonmation/jifenchoujiang.png',
    hoverImg: '/public/personalInfonmation/2jifenchoujiang.png',
    english: 'Integral lottery',
    showMoudleFlag: false,
  },
  {
    name: '拍照打卡',
    img: '/public/personalInfonmation/paizhao.png',
    img2: '/public/personalInfonmation/paizhao.png',
    hoverImg: '/public/personalInfonmation/2paizhaodaka.png',
    english: 'Take photos',
    showMoudleFlag: false,
  },
  {
    name: '已报名的活动',
    img: '/public/personalInfonmation/yibaoming.png',
    img2: '/public/personalInfonmation/yibaoming.png',
    hoverImg: '/public/personalInfonmation/2jijiangkaishi.png',
    english: 'Activities',
    showMoudleFlag: false,
  },
  {
    name: '个性化定制',
    img: '/public/personalInfonmation/gexing.png',
    img2: '/public/personalInfonmation/gexing.png',
    hoverImg: '/public/personalInfonmation/2gexinghua.png',
    english: 'Personalized',
    showMoudleFlag: false,
  },
  {
    name: '趣味活动',
    img: '/public/personalInfonmation/quweihuodong.png',
    img2: '/public/personalInfonmation/quweihuodong.png',
    hoverImg: '/public/personalInfonmation/2quwei.png',
    english: 'Fun activities',
    showMoudleFlag: false,
  },
  {
    name: '热点话题讨论',
    img: '/public/personalInfonmation/taolun.png',
    img2: '/public/personalInfonmation/taolun.png',
    hoverImg: '/public/personalInfonmation/2redianhuodong.png',
    english: 'Hot topic discussion',
    showMoudleFlag: false,
  },
])

/*
    实现鼠标经过后12个模块图片与文字的样式切换
*/
const activeIndex = ref()
function changeImgToWhite(index) {
  list.value[index].img = list.value[index].hoverImg
  activeIndex.value = index
}

function changeImgToColor(index) {
  list.value[index].img = list.value[index].img2
  activeIndex.value = 100
}

// 修改资料的弹框
const dialogTableVisible = ref(false)
// 积分规则的弹框
const categoryDialogTableVisible = ref(false)
function showCategoryDialogTableVisible() {
  categoryDialogTableVisible.value = true
}

/*
    执行方法得到twelveStore对象
*/
const twelveStore = useTwelveStore()
// /*
//     控制12个模块的显示和隐藏
// */
// const activeMoudleIndex = twelveStore.activeMoudleIndex
// console.log(activeMoudleIndex.value);
const router = useRouter() // 用于页面的跳转

/*
    定义一个函数用来灵活控制模块之间的显示和隐藏
*/
function changeActiveMoudleIndex(index) {
  if (index === 11) {
    router.push('/hottopicdiscussion')
  }
  else if (index === 7) {
    router.push('/creativeservices')
  }
  else {
    // 开启对应模块的v-show
    twelveStore.changeActiveIndex(index)
    // 关闭12的v-show
    twelveStore.changeTwelveFlagtoFalse()
  }
}

const userStore = useUserStore()
userStore.getUserInfo()
const username = ref('')
const company = ref('')
const department = ref('')
const position = ref('')
const email = ref('')

function gotoImproveInfomation() {
  dialogTableVisible.value = true
  username.value = userStore.userInfo.username
  company.value = userStore.userInfo.company
  department.value = userStore.userInfo.department
  position.value = userStore.userInfo.job
  email.value = userStore.userInfo.email
}
function changeInfomations() {
  userStore.modifyUserInfo({
    company: company.value,
    department: department.value,
    email: email.value,
    job: position.value,
    name: '',
    username: username.value,
  })
  setTimeout(() => {
    dialogTableVisible.value = false
  }, 1000)
  ElMessage({
    message: '修改成功',
    type: 'success',
  })
}

const categoryRulesList = ref()
// TODO：调接口获取积分规则列表
async function getCategoryRulesList() {
  const res = await getCategoryRulesListAPI()
  categoryRulesList.value = res.data
}
getCategoryRulesList()

// TODO：调接口签到
async function everyDaySignIn() {
  await everyDaySignInAPI()
  signInStatus.changeIsSignInFlag()
  ElMessage({
    message: '签到成功',
    type: 'success',
  })
}

function sorryForAlreadySignIn() {
  ElMessage({
    message: '今日已签到，不可重复签到',
    type: 'error',
  })
}
</script>

<template>
  <!-- PC端个人中心 -->
  <div class="w-full bg-#F7F9FC pb50px max-md:hidden">
    <div
      class="bg h-full w-full bg-contain bg-left bg-no-repeat pt50px font-size-35px color-#fff font-bold"
    >
      <p class="pl10%">
        个人中心
      </p>
    </div>
    <div class="ml10% mr10% mt20px w80% flex">
      <!-- 用户的资料 -->
      <div class="h100% h600px w23% flex flex-col bg-#fff shadow-lg">
        <!-- username and avator -->
        <div class="w-full flex flex-col items-center">
          <img
            class="mt50px h75px w75px rounded-50%"
            :src="userStore.userInfo.avatar"
            alt=""
          >
          <p class="mt20px font-size-20px">
            {{ userStore.userInfo.username }}
          </p>
        </div>
        <!-- personal information -->
        <div class="ml40px mt35px">
          <span class="font-size-14px color-#555">公司：</span>
          <span>{{ userStore.userInfo.company }}</span>
        </div>
        <div class="ml40px mt10px">
          <span class="font-size-14px color-#555">部门：</span>
          <span>{{ userStore.userInfo.department }}</span>
        </div>
        <div class="ml40px mt10px">
          <span class="font-size-14px color-#555">职位：</span>
          <span>{{ userStore.userInfo.job }}</span>
        </div>
        <div class="ml40px mt10px">
          <span class="font-size-14px color-#555">电话：</span>
          <span>{{ userStore.userInfo.phone }}</span>
        </div>
        <div class="ml40px mt10px">
          <span class="font-size-14px color-#555">邮箱：</span>
          <span>{{ userStore.userInfo.email }}</span>
        </div>
        <div class="mt30px w-full flex justify-center">
          <RotateBgButton @click="gotoImproveInfomation" />
        </div>
      </div>
      <!-- TODO：签到功能 -->
      <!--
        订阅 点赞 收藏 我的商品
        我的积分(积分明细) 积分兑换 积分抽奖 拍照打卡
        已报名的活动 定制个性化内容 趣味活动
       -->
      <div class="ml10px h-full flex flex-1 flex-col">
        <!-- 右边头部模块 -->
        <div
          class="h80px w-full flex items-center bg-#fff pl20px pr20px font-size-20px color-[#00B4BC] font-bold shadow-lg"
        >
          <p>
            我的积分：<span class="color-[#333]">{{
              userStore.userInfo.integral
            }}</span>
          </p>
          <span
            class="ml8% cursor-pointer font-size-16px hover:color-blue"
            @click="showCategoryDialogTableVisible"
          >点击查看积分规则</span>
          <SignInRotateBgButton
            v-if="signInStatus.isSignInFlag"
            class="ml30%"
            @click="everyDaySignIn"
          />
          <button
            v-else
            class="ml30% h35px w120px rounded-20px font-size-13px"
            @click="sorryForAlreadySignIn"
          >
            已签到
          </button>
        </div>
        <!-- 右侧底下模块 点击可进入分模块 -->
        <div
          v-show="twelveStore.twelve"
          class="mt10px h510px w-full flex-1 bg-#fff shadow-lg"
        >
          <ul
            class="rightBottomUl h510px w-full flex flex-wrap justify-evenly pb50px pt50px"
          >
            <li
              v-for="(item, index) in list"
              :key="index"
              :class="activeIndex === index ? 'active' : ''"
              class="lii h120px w200px flex cursor-pointer items-center justify-evenly border-0.1px border-[#00B4BC] rounded-10px border-solid bg-#EFFBFF shadow-2xl hover:bg-[#00B4BC]"
              @mouseleave="changeImgToColor(index)"
              @mouseover="changeImgToWhite(index)"
              @click="changeActiveMoudleIndex(index)"
            >
              <img
                :src="item.img"
                alt=""
                class="w50px"
                :class="index === 8 || index === 5 ? 'w70px ' : ''"
              >
              <div>
                <p class="color-[#333] font-bold">
                  {{ item.name }}
                </p>
                <p class="mt5px font-size-13px color-[#555] font-bold">
                  {{ item.english }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 我的订阅 -->
        <MySubscriptions v-show="twelveStore.activeMoudleIndex === 0" />
        <!-- 我的点赞 -->
        <MyThumbsUp v-show="twelveStore.activeMoudleIndex === 1" />
        <!-- 我的收藏 -->
        <MyCollection v-show="twelveStore.activeMoudleIndex === 2" />
        <!-- 我的商品 -->
        <MyProducts v-show="twelveStore.activeMoudleIndex === 3" />
        <!-- 我的积分 -->
        <MyIntegral v-show="twelveStore.activeMoudleIndex === 4" />
        <!-- 积分兑换 -->
        <GoodThingsMall v-show="twelveStore.activeMoudleIndex === 5" />
        <!-- 积分抽奖 -->
        <IntegralLottery v-show="twelveStore.activeMoudleIndex === 6" />
        <!-- 拍照打卡 -->
        <TakePhotos v-show="twelveStore.activeMoudleIndex === 7" />
        <!-- 已报名的活动 -->
        <MyActivities v-show="twelveStore.activeMoudleIndex === 8" />
        <!-- 个性化定制 -->
        <Personalized v-show="twelveStore.activeMoudleIndex === 9" />
        <!-- 趣味活动 -->
        <FunActivities v-show="twelveStore.activeMoudleIndex === 10" />
        <!-- 热点话题讨论 -->
        <!-- <HotTopicDiscussion v-show="twelveStore.activeMoudleIndex === 11" /> -->
      </div>
    </div>

    <!-- 完善/修改资料的弹框 -->
    <el-dialog v-model="dialogTableVisible" width="500">
      <div class="h70px w-full flex items-center justify-center font-size-20px">
        修改资料
      </div>
      <div class="h45px w-full flex flex items-center pl50px pr50px">
        <span class="color-red">*</span>
        <span>姓名：</span>
        <input
          v-model="username"
          type="text"
          class="h30px flex-1 border-1px border-#EAEAEA border-solid pl10px"
        >
      </div>
      <div class="h45px w-full flex flex items-center pl50px pr50px">
        <span class="color-red">*</span>
        <span>公司：</span>
        <input
          v-model="company"
          type="text"
          class="h30px flex-1 border-1px border-#EAEAEA border-solid pl10px"
        >
      </div>
      <div class="h45px w-full flex flex items-center pl50px pr50px">
        <span class="color-red">*</span>
        <span>部门：</span>
        <input
          v-model="department"
          type="text"
          class="h30px flex-1 border-1px border-#EAEAEA border-solid pl10px"
        >
      </div>
      <div class="h45px w-full flex flex items-center pl50px pr50px">
        <span class="color-red">*</span>
        <span>职位：</span>
        <input
          v-model="position"
          type="text"
          class="h30px flex-1 border-1px border-#EAEAEA border-solid pl10px"
        >
      </div>
      <div class="h45px w-full flex flex items-center pl23px pr50px">
        <span class="color-red">*</span>
        <span>邮箱地址：</span>
        <input
          v-model="email"
          type="text"
          class="h30px flex-1 border-1px border-#EAEAEA border-solid pl10px"
        >
      </div>
      <div class="w-full flex justify-center">
        <button
          class="mb40px mt30px h40px w350px from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff"
          @click="changeInfomations"
        >
          修改资料
        </button>
      </div>
    </el-dialog>

    <!-- 查看积分规则的弹框 -->
    <el-dialog
      v-model="categoryDialogTableVisible"
      width="800"
      class="pl4% pt2%"
    >
      <div class="mb10px mb5% font-size-20px color-#00B4BC font-bold">
        积分规则
      </div>
      <div
        v-for="(item, index) in categoryRulesList"
        :key="index"
        class="mb5% w-full"
      >
        <span class="inline-block w27%">{{ item.todo }}</span>
        <span class="inline-block w7% color-#00B4BC">+{{ item.number }}</span>
        <span class="inline-block w66% pl6%">{{ item.desc }}</span>
      </div>
    </el-dialog>
  </div>

  <!-- 移动端个人中心  from-#37C2C9 to-#2CA5F5 bg-gradient-to-b -->
  <div class="h888px md:hidden">
    <DynamicTime class="from-blue-400 to-blue-200 bg-gradient-to-l" />
    <div class="mt20px flex justify-evenly">
      <div
        v-for="(item, index) in list.slice(0, 4)"
        :key="index"
        class="h90px w80px flex flex-col items-center justify-evenly bg-#EFFBFF shadow-2xl"
      >
        <img :src="item.img" class="w35px" alt="">
        <p class="font-size-13px">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="mt15px flex justify-evenly">
      <div
        v-for="(item, index) in list.slice(4, 8)"
        :key="index"
        class="h90px w80px flex flex-col items-center justify-evenly bg-#EFFBFF shadow-2xl"
      >
        <img :src="item.img" class="w35px" alt="">
        <p class="font-size-13px">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="mt15px flex justify-evenly">
      <div
        v-for="(item, index) in list.slice(8, 12)"
        :key="index"
        class="h90px w80px flex flex-col items-center justify-evenly bg-#EFFBFF shadow-2xl"
      >
        <img :src="item.img" class="w35px" alt="">
        <p class="font-size-13px">
          {{ item.name }}
        </p>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <button
        class="mb40px mt25px h40px w350px rounded-15px from-[#5FD6E3] to-[#00A7F5] bg-gradient-to-r color-#fff"
      >
        退出登录
      </button>
    </div>
    <div class="w-full flex justify-center">
      <button
        class="mb40px mt-[-25px] h40px w350px rounded-15px from-[#00A7F5] to-[#5FD6E3] bg-gradient-to-r color-#fff"
      >
        注销账号
      </button>
    </div>
  </div>
</template>

<style scoped>
.bg {
  background: url('https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/3/7a0f1a8a401a4672a02783624f245507.jpg');
  width: 100%;
  height: 200px;
}

.lii:hover p {
  color: #fff;
}

.lii:hover {
  border: 0px solid #fff;
  /* background: linear-gradient(to right, #2b77bc, #2db1ba); */
  background: url('https://www.gcsis.cn/img/bg_index.jpg');
  background-repeat: no-repeat;
}

.aa {
  transition: all 0.4s ease;
}
</style>
