import request from '@/utils/http'

/*
    根据大会议程的AgendaId查询评论
*/
export function getAgendaCommentByAgendaIdAPI(agendaId) {
  return request({
    url: `/admin/community/${agendaId}`,
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
