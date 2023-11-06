import axios from 'axios'
// 获取不同分类的视频接口
export function getVedioApi(){
  return axios({
    url: `/api/total`
  })
}
export function getMusicApi(){
  return axios({
    url: '/api/hot'
  })
}
export function getHotApi(){
  return axios({
    url: '/api/music'
  })
}