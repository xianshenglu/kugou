import api from 'src/constants/api'
import { baseApi } from 'src/redux/baseApi'
import { mapRankListResponse } from '@shared/domains/rank/mapper'
import type { RankItem } from '@shared/domains/rank/model'
import axios from 'axios'
import type { RankListResponseDto } from '@shared/domains/rank/dto'
const fetchRankListData = async () => {
  const response = await axios.get<RankListResponseDto>(api.rankList)
  return response
}

export const rankListApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRankList: builder.query<RankItem[], void>({
      queryFn: async () => {
        try {
          const { data } = await fetchRankListData()
          return { data: mapRankListResponse(data) }
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } }
        }
      }
    })
  })
})

export const { useGetRankListQuery } = rankListApi
