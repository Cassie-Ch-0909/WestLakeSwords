import request from '@/utils/http'

/*
    根据日期查询大会议程
*/
export function getAgendaByDateAPI(params) {
  return request({
    url: '/user/agenda/getByDate',
    method: 'GET',
    params: {
      date: params,
    },
  })
}

/*
    根据类型查询大会议程
*/
export function getAgendaByTypeAPI(params) {
  return request({
    url: '/user/agenda/getByType',
    method: 'GET',
    params: {
      type: params,
    },
  })
}
