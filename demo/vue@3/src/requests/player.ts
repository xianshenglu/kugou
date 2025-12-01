import { getSongLyric } from '@shared/mock/requestConfig/player'
import type { 
  SongLyricParams, 
} from '@shared/domains/song/model'
import type { 
  SongLyricResponseDto 
} from '@shared/domains/song/dto'
import http from './http'
import type { AxiosPromise } from 'axios'

export const fetchSongLyric = ({ params = {} as any }: { params?: SongLyricParams } = {}): AxiosPromise<SongLyricResponseDto> => {
  return http({ ...getSongLyric, params: { r: 'play/getdata', ...params } })
}

// export const fetchSongInfo = ({ params = {} }: { params?: PlayerParams } = {}) => {
//   return http({ ...getSongInfo, params: { cmd: 'playInfo', ...params } })
// }
