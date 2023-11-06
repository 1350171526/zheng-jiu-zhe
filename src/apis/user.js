import httpInstance from '@/utils/http'
// 登录接口（暂无后端）
export const loginAPI = ({ account, password }) =>{
  return httpInstance ({
      url: '/login',
      method: 'POST',
      data: {
          account,
          password
      }
  })
}