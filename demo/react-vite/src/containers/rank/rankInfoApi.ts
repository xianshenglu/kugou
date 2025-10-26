import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapRankInfoResponse } from '@shared/domains/rank/mapper'
import type { RankInfoData } from '@shared/domains/rank/model'
import axios from 'axios'
import type { RankInfoResponseDto } from '@shared/domains/rank/dto'

const fetchRankInfoData = async (rankId: string) => {
  const response = await axios.get<RankInfoResponseDto>(api.rankInfo + rankId)
  return response
}

export const rankInfoApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankInfo: builder.query<RankInfoData, string>({
      queryFn: async (rankId) => {
        try {
          const { data } = await fetchRankInfoData(rankId)
          return { data: mapRankInfoResponse(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetRankInfoQuery } = rankInfoApi

