import { getSongLyric, getSongInfo } from '@shared/api/player'
import http from './http'

// 定义参数接口
interface PlayerParams {
  [key: string]: any
}

// 定义获取歌词函数
export const fetchSongLyric = ({ params = {} }: { params?: PlayerParams } = {}) => {
  return http({ ...getSongLyric, params: { r: 'play/getdata', ...params } })
}

// 定义获取歌曲信息函数
export const fetchSongInfo = ({ params = {} }: { params?: PlayerParams } = {}) => {
  return http({ ...getSongInfo, params: { cmd: 'playInfo', ...params } })
}
