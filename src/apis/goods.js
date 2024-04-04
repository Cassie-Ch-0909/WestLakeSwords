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
