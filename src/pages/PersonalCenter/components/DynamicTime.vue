<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

import { useRouter } from 'vue-router'

const circleRadius = 75
let timer: number = 0

enum AP {
  'AM',
  'PM',
}

function getCurrentTime() {
  const date = new Date()
  const _24h = date.getHours()
  const h = _24h % 12
  const m = date.getMinutes()
  const s = date.getSeconds()
  const ap = _24h >= 12 ? AP.PM : AP.AM
  return { h, m, s, ap }
}

const currentTime = getCurrentTime()
const hour = ref<number>(currentTime.h)
const minutes = ref<number>(currentTime.m)
const seconds = ref<number>(currentTime.s)
const ap = ref<AP>(currentTime.ap)

onMounted(() => {
  timer = window.setInterval(() => {
    const { h, m, s, ap: newAp } = getCurrentTime()

    hour.value = h
    minutes.value = m
    ap.value = newAp
    if (s !== seconds.value)
      seconds.value = s
  }, 1000)
})

onUnmounted(() => {
  timer && clearInterval(timer)
})

/*
    移动端点击左上角返回按钮跳转到Home页面
*/
const router = useRouter()
function gotoHome() {
  router.push({ path: '/' })
}
</script>

<template>
  <div style="width: 100%">
    <!-- from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff -->
    <div class="relative container">
      <!-- 头部导航条 -->
      <div class="absolute left-0 top-0px h50px w-full flex items-center from-[#00B4BC] to-[#37C0F7] bg-gradient-to-r color-#fff">
        <div class="flex items-center" @click="gotoHome">
          <i class="iconfont icon-changyongicon- font-size-25px" />
          <span class="">返回</span>
        </div>
        <div class="ml100px font-size-18px font-bold">
          个人中心
        </div>
      </div>
      <div class="absolute left-0 top-50px h70px w-full flex items-center">
        <img src="/public/avator.jpeg" alt="" class="ml10px w50px rounded-7px">
        <p class="ml15px font-size-22px font-bold">
          Cassie
        </p>
      </div>
      <div class="absolute left-25px top-140px w120px flex items-center">
        <div class="h65px w65px flex items-center justify-center rounded-50% from-[#46EDF5] to-[#00A5F7] bg-gradient-to-r font-size-25px color-#fff">
          67
        </div>
        <p class="ml5px color-#fff">
          订阅
        </p>
      </div>
      <div class="absolute right-5px top-140px w120px flex items-center">
        <p class="color-#fff">
          点赞
        </p>
        <div class="ml5px h65px w65px flex items-center justify-center rounded-50% from-[#00A5F7] to-[#46EDF5] bg-gradient-to-r font-size-25px color-#fff">
          32
        </div>
      </div>
      <div class="absolute left-25px top-300px w120px flex items-center">
        <div class="h65px w65px flex items-center justify-center rounded-50% from-[#00A5F7] to-[#46EDF5] bg-gradient-to-r font-size-25px color-#fff">
          11
        </div>
        <p class="ml5px color-#fff">
          收藏
        </p>
      </div>
      <div class="absolute right-5px top-300px w120px flex items-center">
        <p class="color-#fff">
          商品
        </p>
        <div class="ml5px h65px w65px flex items-center justify-center rounded-50% from-[#46EDF5] to-[#00A5F7] bg-gradient-to-r font-size-25px color-#fff">
          5
        </div>
      </div>
      <div class="circle seconds ml30px mt75px">
        <svg>
          <circle
            :cx="circleRadius" :cy="circleRadius" :r="circleRadius" :style="{
              // strokeDashoffset用来绘制路径(到时与积分联动)
              strokeDashoffset: 0 - 90,
            }"
          />
        </svg>
        {{ 1287 }}
        <div class="text">
          我的积分
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  // background-color: papayawhip;
  justify-content: center;
  // height: 314px;
  height: 400px;
  padding-top: 100px;
  position: relative;

  $borderWidth: 6px;

  .circle {
    box-sizing: border-box;
    width: 150px;
    height: 150px;
    font-size: 40px;
    font-weight: 500;
    display: flex;
    justify-content: center;
    align-items: center;
    border: $borderWidth solid #191919;
    border-radius: 50%;
    margin-right: 30px;
    user-select: none;
    position: relative;

    svg {
      position: absolute;
      width: 150px;
      height: 150px;
      border-radius: 50%;
      top: -$borderWidth;
      left: -$borderWidth;
      transform: rotate(-90deg);

      circle {
        width: 100%;
        height: 100%;
        fill: transparent;
        stroke-width: $borderWidth;
        stroke-dasharray: 471;
      }
    }
  }

  .hour {
    svg {
      circle {
        stroke: #ff2972;
      }
    }
  }

  .minutes {
    svg {
      circle {
        stroke: #fee800;
      }
    }
  }

  .seconds {
    svg {
      circle {
        stroke: #00fade;
      }
    }
  }

  .text {
    position: absolute;
    font-size: 16px;
    font-weight: 400;
    width: 66px;
    text-align: center;
    color: #fff;
    left: 0;
    right: 0;
    bottom: 22px;
    margin: 0 auto;
  }

  .ap {
    font-size: 20px;
    font-weight: 500;
    height: 150px;
  }
}
</style>
