import { ref,  } from 'vue'
import { defineStore } from 'pinia'


export const HeaderStateStore = defineStore('HeaderState', () => {
 const isLogin = ref(true)


 

  return { isLogin}
  
  
},
{
  // 持久化存储
  persist: true,
})
