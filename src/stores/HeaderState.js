import { ref,  } from 'vue'
import { defineStore } from 'pinia'

// 用户登录状态
export const HeaderStateStore = defineStore('HeaderState', () => { 
  const isLogin = ref(false)
  const login = () =>{
    isLogin.value = true
  }
  const outLogin = () =>{
    isLogin.value = false
  }
  return {
    isLogin,
    login,
    outLogin
  }
},
{
  // 持久化存储
  persist: true,
})
