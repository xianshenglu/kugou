import api from 'src/shared/constants/api'
import { mapRankInfoResponse } from '@shared/domains/rank/mapper'
import type { RankInfoData } from '@shared/domains/rank/model'
import axios from 'axios'
import type { RankInfoResponseDto } from '@shared/domains/rank/dto'

export async function getRankInfo(rankId: string): Promise<RankInfoData> {
  const response = await axios.get<RankInfoResponseDto>(api.rankInfo + rankId)
  return mapRankInfoResponse(response.data)
}

