import request from '@/utils/http'

/*
    获取热点话题讨论的数据列表
*/
export function getHotTopicContentListAPI() {
  return request({
    url: '/user/hotTopicDiscussion/list',
    method: 'GET',
  })
}

/*
    获取文章榜数据列表
*/
export function getArticleRankingAPI() {
  return request({
    method: 'GET',
    url: '/user/article/list',
  })
}
