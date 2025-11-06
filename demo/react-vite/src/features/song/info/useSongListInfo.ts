import { baseApi } from 'src/shared/redux/baseApi'
import { getSongListInfo } from './songListInfo.repo'
import type { PlaylistInfoData } from '@shared/domains/playlist/model'

export const songListInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSongListInfo: builder.query<PlaylistInfoData, string>({
      queryFn: async (id) => {
        try {
          const data = await getSongListInfo(id)
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSongListInfoQuery } = songListInfoApi

