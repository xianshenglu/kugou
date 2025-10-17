import http from './http'
import { getNewSong } from '@shared/api/newSong'
import type { NewSongResponseDto } from '@shared/domains/song/dto'
import type { PaginationQuery } from '@shared/domains/common/model'
import type { AxiosPromise } from 'axios'

interface NewSongParams extends PaginationQuery {
  json?: boolean
}

export const fetchNewSong = ({ params = {} }: { params?: NewSongParams } = {}): AxiosPromise<NewSongResponseDto> => {
  return http({ ...getNewSong, params: { json: true, ...params } })
}
