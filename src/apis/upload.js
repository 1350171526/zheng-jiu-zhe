import axios from 'axios'

export function uploadVedioApi(){
  return axios({
    url: `/api/upload`
  })
}
export function uploadHotApi(){
  return axios({
    url: `/api/upload/hot`
  })
}
export function uploadMusicApi(){
  return axios({
    url: `/api/upload/music`
  })
}