import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

import { useUserStore } from '@/stores/userStore'
const httpInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 拦截器
// axios请求拦截器
httpInstance.interceptors.request.use(config => {
  // 1. 从pinia获取token数据
  const userStore = useUserStore()
  // 2. 按照后端的要求拼接token数据
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  } 
  return config
}, e => Promise.reject(e))

// 响应拦截器
// axios响应拦截器
httpInstance.interceptors.response.use(res => res.data, e=> {
  const userStore = useUserStore()
  ElMessage({
      type: 'warning',
      message: e.response.data.message
  })
  // 401token失效处理
  // 1.清除本地用户数据
  // 2.跳转到登录页
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.push('/login')
  }
  console.log(e.response.status);
  return Promise.reject(e)
})

export default httpInstance