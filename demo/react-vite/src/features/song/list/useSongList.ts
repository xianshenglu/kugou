import { baseApi } from 'src/shared/redux/baseApi'
import { getSongList } from './songList.repo'
import type { PlaylistSummary } from '@shared/domains/playlist/model'

export const songListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSongList: builder.query<PlaylistSummary[], void>({
      queryFn: async () => {
        try {
          const data = await getSongList()
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSongListQuery } = songListApi

