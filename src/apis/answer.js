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

// TODO：修改校对答案的接口调用
/*
    校对每题答案
*/
export function checkAnswerAPI(questionId, userAnswer) {
  return request({
    url: `/user/user/checkAnswer/${questionId}`,
    method: 'GET',
    params: { userAnswer },
  })
}
