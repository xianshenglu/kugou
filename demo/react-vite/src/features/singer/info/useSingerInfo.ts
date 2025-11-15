import { useQuery } from '@tanstack/react-query'
import { getSingerInfo } from './singerInfo.repo'
import type { SingerInfoData } from '@shared/domains/singer/model'

export const useGetSingerInfoQuery = (id: string) => {
  return useQuery<SingerInfoData>({
    queryKey: ['singerInfo', id],
    queryFn: () => getSingerInfo(id)
  })
}
