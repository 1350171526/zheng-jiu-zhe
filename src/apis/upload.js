import axios from 'axios'

export function uploadVedioApi(){
  return axios({
    url: `/api/upload`
  })
}
