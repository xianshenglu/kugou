import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapSingerInfoData } from '@shared/domains/singer/mapper'
import type { SingerInfoData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerInfoResponseDto } from '@shared/domains/singer/dto'

const fetchSingerInfoData = async (id: string) => {
  const url = api.singerInfo.replace(/singerInfoId?/i, id)
  const response = await axios.get<SingerInfoResponseDto>(url)
  return response
}

export const singerInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerInfo: builder.query<SingerInfoData, string>({
      queryFn: async (id) => {
        try {
          const { data } = await fetchSingerInfoData(id)
          return { data: mapSingerInfoData(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerInfoQuery } = singerInfoApi
