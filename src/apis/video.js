import axios from 'axios'

export function getVedioApi(marker){
  return axios({
    url: `/api/total`,
    params:{
      marker: marker
    }
  })
}
export function getMusicApi(marker){
  return axios({
    url: '/api/hot',
    params:{
      marker: marker
    }
  })
}
export function getHotApi(marker){
  return axios({
    url: '/api/music',
    params:{
      marker: marker
    }
  })
}