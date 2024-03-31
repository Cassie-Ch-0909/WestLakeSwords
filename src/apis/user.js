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