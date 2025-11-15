import { useQuery } from '@tanstack/react-query'
import { getRankList } from './rankList.repo'
import type { RankItem } from '@shared/domains/rank/model'

export const useGetRankListQuery = () => {
  return useQuery<RankItem[]>({
    queryKey: ['rankList'],
    queryFn: getRankList
  })
}
