import request from '@/utils/http'

/*
    获取积分规则列表
*/
export function getCategoryRulesListAPI() {
  return request({
    url: '/user/rules/list',
    method: 'GET',
  })
}
