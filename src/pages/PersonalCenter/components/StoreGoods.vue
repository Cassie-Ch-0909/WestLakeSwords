<script setup>
import { defineProps, ref } from 'vue'
import MagnifyingGlass from './MagnifyingGlass.vue'
import ExchangeButton from './ExchangeButton.vue'
import BuyButtom from './BuyButtom.vue'

/*
    封装一个组件用来存放商品信息
*/
defineProps({
  // img: String,
  // title: String,
  // desc: String,
  // num: Number,
  // logo: String,
  // method: String,
})

/*
    定义一个变量来控制弹框的显示与隐藏
*/
const dialogTableVisible = ref(false)

/*
    定义一个变量来控制是去购买还是去兑换
*/
const buyOrExchangeFlag = ref()

/*
    定义一个函数来打开弹框和选择去购买还是去兑换
    1 去购买 2 去兑换
*/
function showDialog(index) {
  dialogTableVisible.value = true
  if (index === 1)
    buyOrExchangeFlag.value = true

  else if (index === 2)
    buyOrExchangeFlag.value = false
}
</script>

<template>
  <div class="mt10px w-full flex justify-evenly">
    <div class="w280px flex flex-col items-center bg-#fff shadow-xl">
      <img
        class="w-full"
        src="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg"
      >
      <p class="pb10px pt10px font-size-16px font-bold">
        2021年成都大运会赛事门票
      </p>
      <div class="w-full flex font-size-15px color-[#00B4BC]">
        <span class="ml50px font-bold">￥2000</span>
        <button
          class="ml30px w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff"
          @click="showDialog(1)"
        >
          去购买
        </button>
      </div>
      <div class="mt10px w-full flex pb10px font-size-15px">
        <span class="ml20px font-bold">兑换：2000</span>
        <button
          class="ml30px w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff"
          @click="showDialog(2)"
        >
          去兑换
        </button>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" width="900">
    <div class="h225px w-full flex">
      <MagnifyingGlass
        img="https://obs-xhlj.obs.cn-east-3.myhuaweicloud.com/2023/5/32766db3c132417ea4a09924efe87025.jpg"
      />
      <div class="h-full flex-1 p20px">
        <p class="font-size-20px font-bold">
          2021年成都大运会赛事门票
        </p>
        <p class="mt15px">
          2021年成都大运会赛事门票
        </p>
        <ExchangeButton v-if="!buyOrExchangeFlag" class="mt100px" />
        <BuyButtom v-else class="mt100px" />
      </div>
    </div>
    <div class="w-full flex pt20px">
      <div class="flex">
        <img class="h50px w50px" src="/public/personalInfonmation/zhengpin.png">
        <span class="mt10px pl10px font-size-20px">正品保证</span>
      </div>
      <div class="ml50px flex">
        <img class="h50px w50px" src="/public/personalInfonmation/jian.png">
        <span class="mt10px pl10px font-size-20px">平台鉴定</span>
      </div>
    </div>
    <div class="ml5px w-full flex pb50px pt20px">
      <div class="flex">
        <img class="h40px w40px" src="/public/personalInfonmation/recommand.png">
        <span class="mt10px pl15px font-size-20px">官方推荐</span>
      </div>
      <div class="ml55px flex">
        <img class="h40px w40px" src="/public/personalInfonmation/qianggou.png">
        <span class="mt10px pl18px font-size-20px">限时抢购</span>
      </div>
    </div>
  </el-dialog>
</template>
