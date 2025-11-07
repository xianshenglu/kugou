import api from 'src/shared/constants/api'
import { mapRankListResponse } from '@shared/domains/rank/mapper'
import type { RankItem } from '@shared/domains/rank/model'
import axios from 'axios'
import type { RankListResponseDto } from '@shared/domains/rank/dto'

export async function getRankList(): Promise<RankItem[]> {
  const response = await axios.get<RankListResponseDto>(api.rankList)
  return mapRankListResponse(response.data)
}

