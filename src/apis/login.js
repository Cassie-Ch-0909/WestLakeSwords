import request from '@/utils/http'

/*
    获取图形验证码
*/
export function getCaptchaAPI() {
  return request({
    url: '/captcha', // http://localhost:8080/captcha
    method: 'GET',
    responseType: 'blob',
  })
}

/*
    获取短信验证码
*/
export function getPhoneCodeAPI(phoneNumber) {
  return request({
    url: '/admin/phoneCode/get',
    method: 'GET',
    params: {
      phone: phoneNumber,
    },
  })
}

/*
    登录
*/
export function loginAPI() {
  return request({

  })
}
