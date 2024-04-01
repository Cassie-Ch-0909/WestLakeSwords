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
