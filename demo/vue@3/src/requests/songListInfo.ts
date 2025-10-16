import http from './http'
import { getSongListInfo } from '@shared/api/songListInfo'
import type { AxiosPromise } from 'axios'
import type { PlaylistInfoResponse } from '@shared/domains/playlist/model'

interface SongListInfoParams {
  [key: string]: any
}

export const fetchSongListInfo = ({ songListId, params = {} }: { songListId?: string; params?: SongListInfoParams } = {}): AxiosPromise<PlaylistInfoResponse> => {
  let { url, ...props } = getSongListInfo
  url += '/' + songListId
  return http({ ...props, url, params: { json: true, ...params } })
}
