import request from '@/utils/http'

/*
    展示所有商品
*/
export function getAllGoodsAPI() {
  return request({
    url: '/user/shop/list',
    method: 'GET',
  })
}

/*
    积分兑换商品
*/
export function exchangeGoodsByIntegralAPI(id) {
  return request({
    url: `/user/shop/integralBuy/${id}`,
    method: 'POST',
    data: {
      id,
    },
  })
}

/*
    余额购买商品
*/
export function buyGoodsByBalanceAPI(id) {
  return request({
    url: `/user/shop/moneyBuy/${id}`,
    method: 'POST',
    data: {
      id,
    },
  })
}

/*
    展示所有已购买的商品
*/
export function showGoodsGetByBalanceBuyAPI() {
  return request({
    url: '/user/shop/buyList',
    method: 'GET',
  })
}

/*
    展示所有已兑换的商品
*/
export function showGoodsGetByIntegralExchangeAPI() {
  return request({
    url: '/user/shop/exchangeList',
    method: 'GET',
  })
}

/*
    抽奖接口
*/
export function lotteryAPI(params) {
  return request({
    url: '/user/shop/lucky',
    method: 'GET',
    params,
  })
}

/*
    获取抽奖抽中的奖品列表
*/
export function prizeListAPI() {
  return request({
    url: '/user/shop/luckyList',
    method: 'GET',
  })
}
