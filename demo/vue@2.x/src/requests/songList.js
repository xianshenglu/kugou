import http from './http'
import { getSongList } from '@shared/api/songList'

export const fetchSongList = ({ params = {} } = {}) => {
  return http({ ...getSongList, params: { ...params } })
}
