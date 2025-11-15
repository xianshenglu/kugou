import { useQuery } from '@tanstack/react-query'
import { getSingerList } from './singerList.repo'
import type { SingerListData } from '@shared/domains/singer/model'

export const useGetSingerListQuery = (id: string) => {
  return useQuery<SingerListData>({
    queryKey: ['singerList', id],
    queryFn: () => getSingerList(id)
  })
}
