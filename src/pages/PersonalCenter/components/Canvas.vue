<script setup lang="ts">
import { computed, ref } from 'vue'
import thanks from '/public/canvas/thanks.png'
import tenjifen from '/public/canvas/10jifen.png'
import fivejifen from '/public/canvas/50jifen.png'
import redPacket from '/public/canvas/redPacket.png'
import { ElMessage } from 'element-plus'

interface Prize {
  url: string
  desc: string
}

const pirzeList: Prize[] = [
  { url: fivejifen, desc: '50积分' },
  { url: tenjifen, desc: '10积分' },
  { url: redPacket, desc: '现金红包' },
  { url: thanks, desc: '谢谢参与' },
  { url: redPacket, desc: '现金红包' },
  { url: tenjifen, desc: '10积分' },
  { url: thanks, desc: '谢谢参与' },
  { url: fivejifen, desc: '50积分' },
]
const btnStart = { url: '/public/canvas/start.png', desc: 'Start' }
const DrawList = computed(() => {
  return [...pirzeList.slice(0, 4), btnStart, ...pirzeList.slice(4)]
})
const drawOrder = [0, 1, 2, 5, 8, 7, 6, 3] // 抽奖顺序
let count = 0 // 抽奖次数
let isDrawing = false // 是否正在抽奖
const currentIndex = ref<number | null>(null) // 当前选中的奖品
const circle = 32 // 一圈8个奖品，至少转4圈

// // 获取随机数
// function getRandomNum() {
//   const num = Math.floor(Math.random() * pirzeList.length)
//   return num
// }

function draw(index: number) {
  if (index === 4) {
    // 开始抽奖
    if (isDrawing)
      return

    isDrawing = true

    const position = ref(8) // 假设后台返回的中奖位置是5
    // console.log(position)

    const timer = setInterval(() => {
      currentIndex.value = drawOrder[count % drawOrder.length]
      count++
      if (count > circle && currentIndex.value === drawOrder[position.value - 1]) {
        // 抽奖结束
        clearInterval(timer)
        // 停顿一会显示中奖
        setTimeout(() => {
          if (position.value - 1 === 5 || position.value - 1 === 7) {
            ElMessage({
              message: '谢谢参与，很遗憾未抽中奖品',
              type: 'error',
            })
          }
          else {
            ElMessage({
              message: `恭喜您，抽中奖品${pirzeList[position.value - 1].desc}`,
              type: 'success',
            })
          }
          isDrawing = false
          count = 0
          currentIndex.value = null
        }, 500)
      }
    }, 50)
  }
}
</script>

<template>
  <div class="shadow-2xl container">
    <div
      v-for="(item, index) in DrawList"
      :key="index"
      class="prize-item flex flex-col items-center justify-between bg-#fff pb10px pt10px"
      :class="currentIndex === index ? 'active' : ''"
      @click="() => draw(index)"
    >
      <img :src="item.url" alt="" class="w-60px">
      <p class="desc">
        {{ item.desc }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
  width: 400px;
  height: 420px;
  // background-color: lavender;
  background: url('/public/canvas/bg.png') no-repeat;
  padding: 15px 15px;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;

  .prize-item {
    width: 110px;
    height: 120px;
    text-align: center;

    img {
      margin-top: 10px;
    }
  }

  .active {
    background-color: #00b4bc;
  }
}
</style>
