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

/*
    根据新闻id查询新闻详情
*/
export function getNewsByNewsIdAPI(newsId) {
  return request({
    url: `/user/news/news/${newsId}`,
    method: 'GET',
  })
}
