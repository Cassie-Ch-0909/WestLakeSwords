import request from '@/utils/http'

/*
    根据大会议程的AgendaId查询评论
*/
export function getCommentByLikeAPI(agendaId) {
  return request({
    url: `/admin/community/like/${agendaId}`,
    method: 'get',
    params: {
      agendaId,
    },
  })
}

/*
    根据评论的CommentId查询评论
*/
export function getChildCommentsByParentCommentIdAPI(communityId) {
  return request({
    url: `/admin/Commented/select/${communityId}`,
    method: 'get',
    params: {
      communityId,
    },
  })
}

/*
    新增评论
*/
export function addCommentAPI(data) {
  return request({
    url: '/admin/community',
    method: 'post',
    data,
  })
}

/*
    根据时间查询评论
*/
export function getCommentByTimeAPI(agendaId) {
  return request({
    url: `/admin/community/time/${agendaId}`,
    method: 'get',
    params: {
      agendaId,
    },
  })
}
