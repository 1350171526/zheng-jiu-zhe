// 管理用户数据相关(暂无后端)

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 1. 定义管理用户数据的state
  const userInfo = ref({})
  // 2. 点击登录通过前端表单验证后调用登录接口向后端传入并验证准确性返回用户信息
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    // 后端返回的用户信息应该包含：用户id、用户头像、用户好友信息、用户个性签名、作品数、收藏数、点赞数、等信息
    userInfo.value = res.result
    // 提示用户
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
// 登录成功后pinia数据的持久化存储吧userinfo信息保存到local storage
{
  persist: true,
})