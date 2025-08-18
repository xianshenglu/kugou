import http from './http'
import { getSongListInfo } from '@shared/api/songListInfo'

// 定义参数接口
interface SongListInfoParams {
  [key: string]: any
}

// 定义获取歌单信息函数
export const fetchSongListInfo = ({ songListId, params = {} }: { songListId: string; params?: SongListInfoParams } = {}) => {
  let { url, ...props } = getSongListInfo
  url += '/' + songListId
  return http({ ...props, url, params: { json: true, ...params } })
}
