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

/*
    获取作者榜数据列表
*/
export function getAuthorRankingListAPI() {
  return request({
    method: 'GET',
    url: '/user/author/list',
  })
}

/*
    获取推荐话题数据列表
*/
export function getRecommandTopicListAPI() {
  return request({
    method: 'GET',
    url: '/user/recommendTopic/list',
  })
}
