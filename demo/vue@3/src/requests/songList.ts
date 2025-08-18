import http from './http'
import { getSongList } from '@shared/api/songList'

// 定义参数接口
interface SongListParams {
  [key: string]: any
}

// 定义获取歌单函数
export const fetchSongList = ({ params = {} }: { params?: SongListParams } = {}) => {
  return http({ ...getSongList, params: { ...params } })
}
