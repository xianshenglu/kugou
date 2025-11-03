import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapPlaylistList } from '@shared/domains/playlist/mapper'
import type { PlaylistSummary } from '@shared/domains/playlist/model'
import axios from 'axios'
import type { PlaylistListResponseDto } from '@shared/domains/playlist/dto'

const fetchSongListData = async () => {
  const response = await axios.get<PlaylistListResponseDto>(api.songList)
  return response
}

export const songListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSongList: builder.query<PlaylistSummary[], void>({
      queryFn: async () => {
        try {
          const { data } = await fetchSongListData()
          return { data: mapPlaylistList(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSongListQuery } = songListApi
