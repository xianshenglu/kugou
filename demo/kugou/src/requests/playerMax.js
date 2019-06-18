import { getSongLyric, getSongInfo } from '../api/playerMax'
import http from './http'

export const fetchSongLyric = (params = {}) => {
  return http({ ...getSongLyric, params: { r: 'play/getdata', ...params } })
}
export const fetchSongInfo = (params = {}) => {
  return http({ ...getSongInfo, params: { cmd: 'playInfo', ...params } })
}
