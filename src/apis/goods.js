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
export function exchangeGoodsByIntegralAPI(data) {
  return request({
    url: '/user/shop/integralBuy',
    method: 'POST',
    data,
  })
}
