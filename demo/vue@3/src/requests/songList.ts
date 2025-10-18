import http from './http'
import { getSongList } from '@shared/api/songList'
import type { PlaylistListResponseDto } from '@shared/domains/playlist/dto'
import type { AxiosPromise } from 'axios'

export const fetchSongList = ({ params = {} }: { params?: Record<string, any> } = {}): AxiosPromise<PlaylistListResponseDto> => {
  return http({ ...getSongList, params: { ...params } })
}
