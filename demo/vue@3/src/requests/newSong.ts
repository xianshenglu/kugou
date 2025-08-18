import http from './http'
import { getNewSong } from '@shared/api/newSong'

// 定义参数接口
interface NewSongParams {
  [key: string]: any
}

// 定义新歌请求函数
export const fetchNewSong = ({ params = {} }: { params?: NewSongParams } = {}) => {
  return http({ ...getNewSong, params: { json: true, ...params } })
}
