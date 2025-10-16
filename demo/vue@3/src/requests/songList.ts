import http from './http'
import { getSongList } from '@shared/api/songList'
import type { AxiosPromise } from 'axios'
import type { PlaylistListResponse } from '@shared/domains/playlist/model'

// 定义参数接口
interface SongListParams {
  [key: string]: any
}

// 定义获取歌单函数
export const fetchSongList = ({ params = {} }: { params?: SongListParams } = {}): AxiosPromise<PlaylistListResponse> => {
  return http({ ...getSongList, params: { ...params } })
}
