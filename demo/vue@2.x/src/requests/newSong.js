import http from './http'
import { getNewSong } from '@shared/api/newSong'

export const fetchNewSong = ({ params = {} } = {}) => {
  return http({ ...getNewSong, params: { json: true, ...params } })
}
