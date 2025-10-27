import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapSingerListData } from '@shared/domains/singer/mapper'
import type { SingerListData } from '@shared/domains/singer/model'
import axios from 'axios'
import type { SingerListResponseDto } from '@shared/domains/singer/dto'

const fetchSingerListData = async (id: string) => {
  const url = api.singerList.replace(/singerListId?/i, id)
  const response = await axios.get<SingerListResponseDto>(url)
  return response
}

export const singerListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerList: builder.query<SingerListData, string>({
      queryFn: async (id) => {
        try {
          const { data } = await fetchSingerListData(id)
          return { data: mapSingerListData(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerListQuery } = singerListApi
