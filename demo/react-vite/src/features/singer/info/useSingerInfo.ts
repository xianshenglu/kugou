import { baseApi } from 'src/shared/redux/baseApi'
import { getSingerInfo } from './singerInfo.repo'
import type { SingerInfoData } from '@shared/domains/singer/model'

export const singerInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerInfo: builder.query<SingerInfoData, string>({
      queryFn: async (id) => {
        try {
          const data = await getSingerInfo(id)
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerInfoQuery } = singerInfoApi

