import { http } from './http'
import { getSongListInfo } from '../api/rankInfo'

export const fetchSongListInfo = params => {
  return http({ ...getSongListInfo, params: { json: true, ...params } })
}
