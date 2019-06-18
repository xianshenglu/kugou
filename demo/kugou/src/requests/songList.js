import http from './http'
import { getSongList } from '../api/rankInfo'

export const fetchSongList = (params = {}) => {
  return http({ ...getSongList, params: { ...params } })
}
