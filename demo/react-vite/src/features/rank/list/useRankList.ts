import { baseApi } from 'src/shared/redux/baseApi'
import { getRankList } from './rankList.repo'
import type { RankItem } from '@shared/domains/rank/model'

export const rankListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankList: builder.query<RankItem[], void>({
      queryFn: async () => {
        try {
          const data = await getRankList()
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetRankListQuery } = rankListApi
