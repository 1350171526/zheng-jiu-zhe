import axios from 'axios'
// 上传视频接口
export function uploadVedioApi(){
  return axios({
    url: `/api/upload`
  })
}
