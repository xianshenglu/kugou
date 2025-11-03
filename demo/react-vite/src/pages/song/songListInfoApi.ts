import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapPlaylistInfo } from '@shared/domains/playlist/mapper'
import type { PlaylistInfoData } from '@shared/domains/playlist/model'
import axios from 'axios'
import type { PlaylistInfoResponseDto } from '@shared/domains/playlist/dto'

const fetchSongListInfoData = async (id: string) => {
  const url = api.songListInfo.replace(/songListInfoId/i, id)
  const response = await axios.get<PlaylistInfoResponseDto>(url)
  return response
}

export const songListInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSongListInfo: builder.query<PlaylistInfoData, string>({
      queryFn: async (id) => {
        try {
          const { data } = await fetchSongListInfoData(id)
          return { data: mapPlaylistInfo(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSongListInfoQuery } = songListInfoApi
