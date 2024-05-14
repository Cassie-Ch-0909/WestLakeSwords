import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  prizeListAPI,
  showGoodsGetByBalanceBuyAPI,
  showGoodsGetByIntegralExchangeAPI,
} from '@/apis/goods'

export const useMyGoodsStore = defineStore(
  'mygoods',
  () => {
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

    // TODO：调接口获取抽奖抽中的商品列表
    const prizeList = ref([])
    async function getPrizeList() {
      const res = await prizeListAPI()
      prizeList.value = res.data
    }
    getPrizeList()

    return {
      goodsGetByBalanceBuyList,
      goodsGetByIntegralExchangeList,
      prizeList,
      showGoodsGetByBalanceBuy,
      showGoodsGetByIntegralExchange,
      getPrizeList,
    }
  },
  {
    persist: true,
  },
)
