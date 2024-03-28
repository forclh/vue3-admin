// 用户小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { UserState } from './types/type'
// 引入操作本地存储的工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token'
// 创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据的地方
  state: (): UserState => {
    return {
      token: GET_TOKEN(),
    }
  },
  // 异步|逻辑的地方
  actions: {
    // 用户登录的方法
    async userLogin(data: loginForm) {
      // 登录请求
      let result: loginResponseData = await reqLogin(data)
      //  登录成功200 -> 获得token -> 存储token
      if (result.code == 200) {
        // pinia存储token(通过js对象存储非持久化)
        this.token = result.data.token as string
        // 本地持久化存储
        SET_TOKEN(result.data.token as string)
        // 使得当前async函数返回一个成功的promise
        return 'ok'
      } else {
        // 登录失败201 -> 返回失败的promise携带登录失败的错误信息
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

// 对外暴露获取小仓库的方法
export default useUserStore
