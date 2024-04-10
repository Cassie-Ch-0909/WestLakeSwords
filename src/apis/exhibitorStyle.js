import request from '@/utils/http'

/*
    查询所有展商
*/
export function getAllExhibitorAPI() {
  return request({
    url: '/user/exhibitor/list',
    method: 'GET',
  })
}
