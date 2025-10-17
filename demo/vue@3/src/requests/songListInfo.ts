import http from './http'
import { getSongListInfo } from '@shared/api/songListInfo'
import type { AxiosPromise } from 'axios'
import type { PlaylistInfoResponseDto } from '@shared/domains/playlist/dto'


export const fetchSongListInfo = ({ songListId, params = {} }: { songListId?: string; params?: Record<string, any>} = {}): AxiosPromise<PlaylistInfoResponseDto> => {
  let { url, ...props } = getSongListInfo
  url += '/' + songListId
  return http({ ...props, url, params: { json: true, ...params } })
}
