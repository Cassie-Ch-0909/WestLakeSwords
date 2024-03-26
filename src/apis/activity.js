import request from '@/utils/http'

/*
    根据活动类型查询精彩活动
*/

export function getActivityByTypeAPI(params) {
  return request({
    url: '/user/activity/getByType',
    method: 'GET',
    params: {
      type: params,
    },
  })
}
