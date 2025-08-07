import { getSongLyric, getSongInfo } from '@shared/api/player'
import http from './http'

export const fetchSongLyric = ({ params = {} } = {}) => {
  return http({ ...getSongLyric, params: { r: 'play/getdata', ...params } })
}
export const fetchSongInfo = ({ params = {} } = {}) => {
  return http({ ...getSongInfo, params: { cmd: 'playInfo', ...params } })
}
