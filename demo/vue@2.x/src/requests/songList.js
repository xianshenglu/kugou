import http from './http'
import { getSongList } from '../api/songList'

export const fetchSongList = ({ params = {} } = {}) => {
  return http({ ...getSongList, params: { ...params } })
}
