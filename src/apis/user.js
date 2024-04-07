import request from '@/utils/http'

/*
    修改用户资料 传入一个Object
*/
export function modifyUserInfoAPI(data) {
  return request({
    url: '/user/user',
    method: 'PUT',
    data,
  })
}

/*
    获取用户信息
*/
export function getUserInfoAPI() {
  return request({
    url: '/user/user/get',
    method: 'GET',
  })
}

/*
    获取用户积分明细列表
*/
export function getUserIntegraDetailslListAPI() {
  return request({
    url: '/user/user/getIntegralList',
    method: 'GET',
  })
}

/*
    获取用户订阅列表
*/
export function getUserSubscriptionListAPI() {
  return request({
    url: '/user/user/getAgendaSubscribe',
    method: 'GET',
  })
}

/*
    获取用户收藏列表
*/
export function getUserCollectionListAPI() {
  return request({
    url: '/user/user/getAgendaStar',
    method: 'GET',
  })
}

/*
    用户签到
*/
export function everyDaySignInAPI() {
  return request({
    url: '/user/user/signIn',
    method: 'GET',
  })
}
