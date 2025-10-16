import http from './http'
import { getSingerInfo } from '@shared/api/singerInfo'
import type { AxiosPromise } from 'axios'
import type { SingerInfoResponse } from '@shared/domains/singer/model'

// 定义参数接口
interface SingerInfoParams {
  [key: string]: any
}

// 定义获取歌手信息函数
export const fetchSingerInfo = ({ singerId, params = {} }: { singerId?: string; params?: SingerInfoParams } = {}): AxiosPromise<SingerInfoResponse> => {
  let { url, ...props } = getSingerInfo
  url += '/' + singerId + '&json=true'
  return http({ ...props, url, params })
}
