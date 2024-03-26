import request from '@/utils/http'

/*
    获取图形验证码
*/
export function getCaptchaAPI() {
  return request({
    url: '/captcha', // http://localhost:8080/captcha
    method: 'get',
    responseType: 'blob',
  })
}

/*
    获取短信验证码
*/
export function getPhoneCodeAPI() {
  return request({
    url: '/admin/phoneCode/get',
  })
}

/*
    登录
*/
export function loginAPI() {
  return request({

  })
}
