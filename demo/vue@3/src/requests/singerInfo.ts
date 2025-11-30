import http from './http'
import { getSingerInfo } from '@shared/mock/requestConfig/singerInfo'
import type { AxiosPromise } from 'axios'
import type { SingerInfoResponseDto } from '@shared/domains/singer/dto'

// 定义参数接口
interface SingerInfoParams {
  [key: string]: any
}

// 定义获取歌手信息函数
export const fetchSingerInfo = ({ singerId, params = {} }: { singerId?: string; params?: SingerInfoParams } = {}): AxiosPromise<SingerInfoResponseDto> => {
  let { url, ...props } = getSingerInfo
  url += '/' + singerId + '&json=true'
  return http({ ...props, url, params })
}
