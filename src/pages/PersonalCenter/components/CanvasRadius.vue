<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { lotteryAPI } from '@/apis/goods'
import { useUserStore } from '@/stores/user.js'

// TODO1：调用抽奖接口
const lotteryParamsObj = ref({
  addIntegral: '',
  needIntegral: '500',
  shopName: '',
  userId: '',
})
async function lottery(obj) {
  await lotteryAPI(obj)
  // console.log(res)
}

// TODO2：获取用户Id
const userStore = useUserStore()
// console.log(userStore.userInfo.id)
lotteryParamsObj.value.userId = userStore.userInfo.id
// console.log(lotteryParamsObj.value)

const activeIndex = ref()
const state = ref({
  // 奖品数组
  prizeList: [
    { name: 'Thanks', pic: '/public/canvas/thanks2.png' },
    {
      name: '杭州大运会门票',
      pic:
        'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/014a39c8a5c440ccbb9549db8bb8c0af.jpg',
    },
    { name: 'Thanks', pic: '/public/canvas/thanks2.png' },
    {
      name: '睡眠记忆枕头',
      pic:
        'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/3518223caed3401f8e0c72bc91593b2c.jpg',
    },
    { name: 'Thanks', pic: '/public/canvas/thanks2.png' },
    {
      name: '安恒小龙人抱枕',
      pic:
        'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/e49da182c8364cb7af6d39fe2bcd2fd3.jpg',
    },
    { name: 'Thanks', pic: '/public/canvas/thanks2.png' },
    {
      name: '故宫文化日历',
      pic:
        'https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/4/68d6d7ff155842f28f31ff0c1a66b77b.png',
    },
  ], // 后台配置的奖品数据
  isRunning: false, // 是否正在抽奖
  baseRunAngle: 360 * 5, // 总共转动角度 至少5圈
  prizeId: 0, // 中奖id
})
const prizeWrap = ref(null)

// 平均每个奖品角度
const rotateAngle = computed(() => {
  const _degree = 360 / state.value.prizeList.length
  return _degree
})

// 要执行总角度数
const totalRunAngle = computed(() => {
  return (
    state.value.baseRunAngle
    + 360
    - state.value.prizeId * rotateAngle.value
    - rotateAngle.value / 2
  )
})

// 计算绘制转盘背景
const bgColor = computed(() => {
  const _len = state.value.prizeList.length
  const colorList = ['#5352b3', '#363589']
  let colorVal = ''
  for (let i = 0; i < _len; i++) {
    colorVal += `${colorList[i % 2]} ${rotateAngle.value
    * i}deg ${rotateAngle.value * (i + 1)}deg,`
  }

  return `
            background: conic-gradient(${colorVal.slice(0, -1)});
          `
})
// 每个奖品布局
const prizeStyle = computed(() => {
  const _degree = rotateAngle.value
  return (i) => {
    return `
              width: ${2 * 270 * Math.sin(((_degree / 2) * Math.PI) / 180)}px;
              height: 270px;
              transform: rotate(${_degree * i + _degree / 2}deg);
              transform-origin: 50% 100%;
            `
  }
})

onMounted(() => {
  prizeWrap.value.style = `${
    bgColor.value
  } transform: rotate(-${rotateAngle.value / 2}deg)`
})

onUnmounted(() => {
  prizeWrap.value?.removeEventListener('transitionend', stopRun)
})

// 获取随机数
function getRandomNum() {
  const num = Math.floor(Math.random() * state.value.prizeList.length)
  return num
}

function start() {
  // 判断是否在抽奖
  if (!state.value.isRunning) {
    state.value.isRunning = true

    // console.log('开始抽奖，后台请求中奖奖品')
    // 请求返回的奖品编号 这里使用随机数
    const prizeId = getRandomNum()
    // console.log('中奖ID>>>', prizeId, state.value.prizeList[prizeId])
    state.value.prizeId = prizeId
    activeIndex.value = prizeId
    // console.log(activeIndex.value)
    if (userStore.userInfo.integral >= 500) {
      startRun()
    }
    else {
      ElMessage({
        message: '抱歉，您的积分不足',
        type: 'error',
      })
    }
  }
}

function startRun() {
  // console.log(state.value.isRunning, totalRunAngle.value,'909090909090')
  // 设置动效
  prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value}deg);
            transition: all 4s ease;
          `
  // TODO3: 获取中奖的商品名称
  if (
    state.value.prizeId === 1
    || state.value.prizeId === 3
    || state.value.prizeId === 5
    || state.value.prizeId === 7
  ) {
    lotteryParamsObj.value.shopName
      = state.value.prizeList[activeIndex.value].name
  }
  // TODO4: 发请求调用抽奖接口 减去积分 加上已抽中的商品 并重新计算用户积分
  lottery(lotteryParamsObj.value)
  // TODO: 更新积分
  const userStore = useUserStore()
  userStore.getUserInfo()
  // 监听transition动效停止事件
  prizeWrap.value.addEventListener('transitionend', stopRun)
  // 停顿一会显示中奖
  setTimeout(() => {
    // alert(state.value.prizeList[activeIndex.value].name)
    if (activeIndex.value % 2 === 0) {
      ElMessage({
        message: '谢谢参与，很遗憾未抽中奖品',
        type: 'error',
      })
    }
    else {
      ElMessage({
        message: `恭喜您，抽中奖品${
          state.value.prizeList[activeIndex.value].name
        }`,
        type: 'success',
      })
    }
  }, 4800)
  // console.log(state.value.prizeId)
}

function stopRun() {
  // console.log(e)
  // 关闭抽奖
  lotteryParamsObj.value.shopName = ''
  state.value.isRunning = false
  prizeWrap.value.style = `
            ${bgColor.value}
            transform: rotate(${totalRunAngle.value
            - state.value.baseRunAngle}deg);
          `
}
</script>

<template>
  <!-- <div v-cloak id="app"> -->
  <div class="container">
    <div ref="prizeWrap" class="prize-list shadow-2xl" :style="bgColor">
      <div
        v-for="(item, index) in state.prizeList"
        :key="index"
        class="prize-item absolute left-0 right-0 top-[-55px]"
        :style="prizeStyle(index)"
      >
        <img :src="item.pic" alt="">
        <p>{{ item.name }}</p>
      </div>
    </div>
    <div class="btn" @click="start" />
    <!-- </div> -->
  </div>
</template>

<style scoped>
.container {
  width: 440px;
  height: 440px;
  /*background: #98d3fc url('https://www.jq22.com/demo/vue-luck-draw-pdmm202010260015/img/bg.a4b976d5.png') no-repeat center / 100% 100%;*/
  /*background: conic-gradient(
       red 6deg, orange 6deg 18deg, yellow 18deg 45deg,
       green 45deg 110deg, blue 110deg 200deg, purple 200deg);*/
  margin: 100px auto;
  position: relative;
}

.prize-list {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid #98d3fc;
  overflow: hidden;
}

.prize-item {
  /*border: 2px solid red;*/
  /* position: absolute;
  left: 0;
  right: 0px;
  top: -55px; */
  margin: auto;
}

.prize-item img {
  width: 40%;
  /* height: 20%; */
  margin: 80px auto 10px;
  display: block;
}

.prize-item p {
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 20px;
}

.btn {
  width: 160px;
  height: 160px;
  background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/btn_lottery.png')
    no-repeat center / 100% 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
}

.btn::before {
  content: '';
  width: 41px;
  height: 39px;
  background: url('https://www.jq22.com/demo/jquerylocal201912122316/img/icon_point.png')
    no-repeat center / 100% 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: -33px;
  margin: auto;
}
</style>
