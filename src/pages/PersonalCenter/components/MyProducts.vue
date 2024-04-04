<script setup>
import { ref } from 'vue'
import MoudleHeader from './MoudleHeader.vue'
import MyComponents from './MyComponents.vue'
import GoodsComponent from './GoodsComponent.vue'
import { showGoodsGetByBalanceBuyAPI, showGoodsGetByIntegralExchangeAPI } from '@/apis/goods'

const activeIndex = ref(0)
function changeActiveIndex(index) {
  activeIndex.value = index
}

// TODO: 调接口获取通过余额购买商品的商品列表
const goodsGetByBalanceBuyList = ref([])
async function showGoodsGetByBalanceBuy() {
  const res = await showGoodsGetByBalanceBuyAPI()
  goodsGetByBalanceBuyList.value = res.data
  // console.log(res)
}
showGoodsGetByBalanceBuy()

// TODO: 调接口获取通过积分兑换商品的商品列表
const goodsGetByIntegralExchangeList = ref([])
async function showGoodsGetByIntegralExchange() {
  const res = await showGoodsGetByIntegralExchangeAPI()
  goodsGetByIntegralExchangeList.value = res.data
}
showGoodsGetByIntegralExchange()
</script>

<template>
  <!-- 原始高度是h600px -->
  <div class="mt10px w-full flex-1 shadow-lg">
    <MoudleHeader title="我的商品" />
    <div class="mb10px mt10px h50px w-full flex items-center bg-#fff">
      <div
        :class="activeIndex === 0 ? 'border-b-3px border-[#00B4BC] border-solid color-[#00B4BC]' : ''"
        class="ml20px h-full w80px flex items-center justify-center font-size-16px font-bold"
        @click="changeActiveIndex(0)"
      >
        已购买
      </div>
      <div
        :class="activeIndex === 1 ? 'border-b-3px border-[#00B4BC] border-solid color-[#00B4BC]' : ''"
        class="ml20px h-full w80px flex items-center justify-center font-size-16px font-bold"
        @click="changeActiveIndex(1)"
      >
        已兑换
      </div>
    </div>
    <GoodsComponent
      v-for="(item, index) in goodsGetByBalanceBuyList" v-show="activeIndex === 0" :key="index"
      :img="item.img" :title="item.goodsName" :desc="item.goodsDesc" :num="item.price"
      logo="/public/personalInfonmation/alreadyBuy.png" method="￥"
    />
    <GoodsComponent
      v-for="(item, index) in goodsGetByIntegralExchangeList"
      v-show="activeIndex === 1" :key="index"
      :img="item.img" :title="item.goodsName" :desc="item.goodsDesc" :num="item.integral" logo="/public/personalInfonmation/alreadyExchange.png" method="积分："
    />
  </div>
</template>

<style scoped></style>
