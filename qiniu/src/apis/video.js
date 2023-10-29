import axios from 'axios'

export function getVedioApi(){
  return axios({
    url: '/api/look'
  })
}