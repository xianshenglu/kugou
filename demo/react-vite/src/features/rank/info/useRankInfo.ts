import { baseApi } from 'src/shared/redux/baseApi'
import { getRankInfo } from './rankInfo.repo'
import type { RankInfoData } from '@shared/domains/rank/model'

export const rankInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankInfo: builder.query<RankInfoData, string>({
      queryFn: async (rankId) => {
        try {
          const data = await getRankInfo(rankId)
          return { data }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetRankInfoQuery } = rankInfoApi
