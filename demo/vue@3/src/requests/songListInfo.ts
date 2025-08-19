import http from './http'
import { getSongListInfo } from '@shared/api/songListInfo'

interface SongListInfoParams {
  [key: string]: any
}

export const fetchSongListInfo = ({ songListId, params = {} }: { songListId?: string; params?: SongListInfoParams } = {}) => {
  let { url, ...props } = getSongListInfo
  url += '/' + songListId
  return http({ ...props, url, params: { json: true, ...params } })
}
