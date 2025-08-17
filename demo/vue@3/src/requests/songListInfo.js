import http from './http'
import { getSongListInfo } from '@shared/api/songListInfo'

export const fetchSongListInfo = ({ songListId, params = {} } = {}) => {
  let { url, ...props } = getSongListInfo
  url += '/' + songListId
  return http({ ...props, url, params: { json: true, ...params } })
}
