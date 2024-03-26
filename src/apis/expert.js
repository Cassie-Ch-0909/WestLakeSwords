import request from '@/utils/http'

/*
    根据日期查询演讲嘉宾
*/

export function getSpeakerByDateAPI(date) {
  return request({
    url: `/user/expert/${date}`,
    method: 'GET',
  })
}
