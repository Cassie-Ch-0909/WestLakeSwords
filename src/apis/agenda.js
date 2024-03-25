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

/*
    根据分类和日期查询大会议程
*/
export function getAgendaByTypeAndDateAPI(obj) {
  return request({
    url: '/user/agenda/getByTypeAndDate',
    method: 'GET',
    params: {
      date: obj.date,
      type: obj.type,
    },
  })
}

/*
    查询所有大会议程信息
*/
export function getAllAgendasAPI() {
  return request({
    url: '/user/agenda/list',
    method: 'GET',
  })
}
