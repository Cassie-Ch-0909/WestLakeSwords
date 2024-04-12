import request from '@/utils/http'

export function downloadImageAPI(imgBase64) {
  return request({
    url: '/user/download',
    method: 'POST',
    data: {
      imgBase64,
    },
  })
}
