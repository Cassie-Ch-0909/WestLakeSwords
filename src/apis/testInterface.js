import request from '@/utils/http'

/*
    登录
    POST方法 data传参
*/
export function loginAPI(data) {
  return request({
    url: '/user/user/login',
    method: 'POST',
    data,
  })
}
