import http from './http'
import { getSingerList } from '@shared/api/singerList'

// 定义参数接口
interface SingerListParams {
  [key: string]: any
}

// 定义获取歌手列表函数
export const fetchSingerList = ({ singerListId, params = {} }: { singerListId: string; params?: SingerListParams } = {}) => {
  let { url, ...props } = getSingerList
  url += '/' + singerListId
  return http({ ...props, url, params: { json: true, ...params } })
}
