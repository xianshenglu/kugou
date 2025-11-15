import { useQuery } from '@tanstack/react-query'
import { getRankInfo } from './rankInfo.repo'
import type { RankInfoData } from '@shared/domains/rank/model'

export const useGetRankInfoQuery = (rankId: string) => {
  return useQuery<RankInfoData>({
    queryKey: ['rankInfo', rankId],
    queryFn: () => getRankInfo(rankId)
  })
}
