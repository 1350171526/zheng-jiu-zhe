import axios from 'axios'

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