import http from './http'
import { getSingerInfo } from '@shared/api/singerInfo'

// 定义参数接口
interface SingerInfoParams {
  [key: string]: any
}

// 定义获取歌手信息函数
export const fetchSingerInfo = ({ singerId, params = {} }: { singerId?: string; params?: SingerInfoParams } = {}) => {
  let { url, ...props } = getSingerInfo
  url += '/' + singerId + '&json=true'
  return http({ ...props, url, params })
}
