// 管理用户数据相关

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 定义获取接口数据的action函数
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    // 1. 提示用户
    ElMessage({ type: 'success', message: '登录成功' })
  }
   // 退出时清除用户信息
   const clearUserInfo = () => {
    userInfo.value = {}
  }
  
  //  以对象的格式把state和action return
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
}, 
// main.js注册pinia数据的持久化存储吧userinfo信息保存到local storage
{
  // 持久化存储
  persist: true,
})