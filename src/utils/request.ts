// 对axios进行二次封装，使用其请求与响应拦截器
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 1.利用axios对象的create方法创建axios实例(其他配置，基础路径、超时时间)
let request = axios.create({
  // 基础路径
  baseURL: import.meta.env.VITE_APP_BASE_API, // 基础路径上会携带/api
  timeout: 5000, // 超时的时间设置5s
})

// 2.axios实例request添加请求与拦截器实例
request.interceptors.request.use((config) => {
  // config配置对象中的headers属性请求头，经常给服务器端携带公共参数
  // 返回配置对象
  return config
})

// 3.配置响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    return response.data
  },
  (error) => {
    // 失败的回调，处理http网络错误的
    let message = '' // 存储网络错误信息
    let status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器错误'
        break
      default:
        message = '网络出现问题'
        break
    }
    // 提示的错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

// 4.对外暴露
export default request
