import request from '@/utils/http'

/*
    获取答题列表
*/
export function getAnswerListAPI() {
  return request({
    url: '/user/user/question',
    method: 'GET',
  })
}

/*
    校对每题答案
*/
export function checkAnswerAPI(params) {
  return request({
    url: '/user/user/checkAnswer',
    method: 'GET',
    params,
  })
}
