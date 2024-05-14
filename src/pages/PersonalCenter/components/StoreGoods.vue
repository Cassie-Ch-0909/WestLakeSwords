<script setup>
import { defineProps, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import MagnifyingGlass from './MagnifyingGlass.vue'
import ExchangeButton from './ExchangeButton.vue'
import BuyButtom from './BuyButtom.vue'
import { useUserStore } from '@/stores/user.js'
import {
  buyGoodsByBalanceAPI,
  exchangeGoodsByIntegralAPI,
  getAllGoodsAPI,
} from '@/apis/goods'

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

// TODO: 调接口获取数据库的商品列表
const goodsList = ref()
async function getAllGoods() {
  const res = await getAllGoodsAPI()
  // console.log(res)
  goodsList.value = res.data
}
getAllGoods()

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
// 当前点中哪个商品
const activeGoodsIndex = ref()
function showDialog(num, index) {
  activeGoodsIndex.value = index
  dialogTableVisible.value = true
  if (num === 1)
    buyOrExchangeFlag.value = true
  else if (num === 2)
    buyOrExchangeFlag.value = false
}

// TODO：调用积分兑换商品接口 如果res.code===1，那么提示兑换成功 如果res.code===0，那么提示兑换失败 积分不足
async function exchangeGoodsByIntegral(data) {
  const res = await exchangeGoodsByIntegralAPI(data)
  if (res.code === 1) {
    // TODO: 更新积分
    const userStore = useUserStore()
    userStore.getUserInfo()
    ElMessage({
      type: 'success',
      message: '兑换成功',
    })
  }
  else {
    ElMessage({
      type: 'error',
      message: '兑换失败，积分不足',
    })
  }
}
// exchangeGoodsByIntegral(1)

async function buyGoodsByBalance(data) {
  const res = await buyGoodsByBalanceAPI(data)
  if (res.code === 1) {
    ElMessage({
      type: 'success',
      message: '购买成功',
    })
  }
  else {
    ElMessage({
      type: 'error',
      message: '购买失败，余额不足',
    })
  }
}
// buyGoodsByBalance(1)

/*
    打开是否确认兑换或购买
*/

function confirmExchange() {
  ElMessageBox.confirm('您确认用积分兑换这件商品吗', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      exchangeGoodsByIntegral(goodsList.value[activeGoodsIndex.value].id)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消兑换',
      })
    })
}

function confirmBuyNow() {
  ElMessageBox.confirm('您确认用购买这件商品吗', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning',
  })
    .then(() => {
      buyGoodsByBalance(goodsList.value[activeGoodsIndex.value].id)
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消购买',
      })
    })
}
</script>

<template>
  <div class="mt20px w-full flex flex-wrap">
    <div
      v-for="(item, index) in goodsList"
      :key="index"
      class="mb20px ml2.125% w30.5% flex flex-col items-center bg-#fff shadow-xl"
    >
      <img class="h220px w-full" :src="item.img">
      <p class="pb10px pt10px font-size-16px font-bold">
        {{ item.goodsName }}
      </p>
      <div
        class="w-full flex justify-between pl50px pr50px font-size-15px color-[#00B4BC]"
      >
        <span class="font-bold">￥{{ item.price }}</span>
        <button
          class="w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff"
          @click="showDialog(1, index)"
        >
          去购买
        </button>
      </div>
      <div
        class="mt10px w-full flex justify-between pb10px pl20px pr50px font-size-15px"
      >
        <span class="font-bold">兑换：{{ item.integral }}</span>
        <button
          class="w100px rounded-10px bg-[#00B4BC] font-size-13px color-#fff"
          @click="showDialog(2, index)"
        >
          去兑换
        </button>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogTableVisible" width="900">
    <div class="h225px w-full flex">
      <MagnifyingGlass :img="goodsList[activeGoodsIndex].img" />
      <div class="h-full flex-1 p20px">
        <p class="font-size-20px font-bold">
          {{ goodsList[activeGoodsIndex].goodsName }}
        </p>
        <p v-if="!buyOrExchangeFlag" class="mb10px mt15px flex items-center">
          <span class="font-size-13px">积分兑换：</span>
          <span class="font-size-20px color-[#00B4BC] font-bold">{{
            goodsList[activeGoodsIndex].integral
          }}</span>
        </p>
        <p v-else class="mb10px mt15px flex items-center">
          <span class="font-size-13px">价格：</span>
          <span class="font-size-20px color-[#00B4BC] font-bold">￥{{ goodsList[activeGoodsIndex].price }}</span>
        </p>
        <p class="mt15px">
          {{ goodsList[activeGoodsIndex].goodsDesc }}
        </p>
        <ExchangeButton
          v-if="!buyOrExchangeFlag"
          class="mt100px"
          @click="confirmExchange"
        />
        <BuyButtom v-else class="mt100px" @click="confirmBuyNow" />
      </div>
    </div>
    <div class="w-full flex pt20px">
      <div class="flex">
        <img
          class="h50px w50px"
          src="/public/personalInfonmation/zhengpin.png"
        >
        <span class="mt10px pl10px font-size-20px">正品保证</span>
      </div>
      <div class="ml50px flex">
        <img class="h50px w50px" src="/public/personalInfonmation/jian.png">
        <span class="mt10px pl10px font-size-20px">平台鉴定</span>
      </div>
    </div>
    <div class="ml5px w-full flex pb50px pt20px">
      <div class="flex">
        <img
          class="h40px w40px"
          src="/public/personalInfonmation/recommand.png"
        >
        <span class="mt10px pl15px font-size-20px">官方推荐</span>
      </div>
      <div class="ml55px flex">
        <img
          class="h40px w40px"
          src="/public/personalInfonmation/qianggou.png"
        >
        <span class="mt10px pl18px font-size-20px">限时抢购</span>
      </div>
    </div>
  </el-dialog>
</template>
