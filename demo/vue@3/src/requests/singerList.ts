import http from './http'
import { getSingerList } from '@shared/api/singerList'
import type { AxiosPromise } from 'axios'
import type { SingerListResponseDto } from '@shared/domains/singer/dto'

// 定义参数接口
interface SingerListParams {
  [key: string]: any
}

// 定义获取歌手列表函数
export const fetchSingerList = ({ singerListId, params = {} }: { singerListId?: string; params?: SingerListParams } = {}): AxiosPromise<SingerListResponseDto> => {
  let { url, ...props } = getSingerList
  url += '/' + singerListId
  return http({ ...props, url, params: { json: true, ...params } })
}
