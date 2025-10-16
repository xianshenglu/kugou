import { getSongLyric } from '@shared/api/player'
import type { 
  SongLyricParams, 
  SongLyricResponse 
} from '@shared/domains/song/model'
import http from './http'
import type { AxiosPromise } from 'axios'

export const fetchSongLyric = ({ params = {} as any }: { params?: SongLyricParams } = {}): AxiosPromise<SongLyricResponse> => {
  return http({ ...getSongLyric, params: { r: 'play/getdata', ...params } })
}

// export const fetchSongInfo = ({ params = {} }: { params?: PlayerParams } = {}) => {
//   return http({ ...getSongInfo, params: { cmd: 'playInfo', ...params } })
// }
