import request from '@/utils/http'

/*
    获取会议详情的评论列表
*/
export function getAllCommentAPI() {
  return request({
    url: '/admin/community',
    method: 'GET',
  })
}
