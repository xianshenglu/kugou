import { baseApi } from 'src/shared/redux/baseApi'
import { getSingerList } from './singerList.repo'
import type { SingerListData } from '@shared/domains/singer/model'

export const singerListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingerList: builder.query<SingerListData, string>({
      queryFn: async (id) => {
        try {
          const data = await getSingerList(id)
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetSingerListQuery } = singerListApi

