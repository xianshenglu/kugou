import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from 'axios'
import { isObject } from '../utils'

// 定义API响应数据接口
interface ApiResponse {
  status: number
  [key: string]: any
}

// 定义请求错误处理函数
const requestErrorHandler = (error: any): Promise<AxiosError> => {
  const isMsgValid =
    isObject(error) &&
    typeof error.message === 'string' &&
    error.message.trim() !== ''
  if (isMsgValid) {
    alert(error.message)
  } else {
    alert('System error, please contact administrator!')
  }
  return Promise.reject(error)
}

// 创建axios实例
const http: AxiosInstance = axios.create({})

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse<ApiResponse>) => {
    const { data } = response
    // todo add other error scenarios
    if (data.status === 0) {
      return requestErrorHandler(data) as any
    }
    return response
  },
  requestErrorHandler
)

export default http
