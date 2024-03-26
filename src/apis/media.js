import request from '@/utils/http'

/*
    查询新闻列表
*/
export function getNewsListAPI() {
  return request({
    url: '/user/news/all',
    method: 'GET',
  })
}
