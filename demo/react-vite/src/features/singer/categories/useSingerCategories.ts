import { useQuery } from '@tanstack/react-query'
import { getSingerCategories } from './singerCategories.repo'
import type { SingerCategoryData } from '@shared/domains/singer/model'

export const useGetSingerCategoriesQuery = () => {
  return useQuery<SingerCategoryData[]>({
    queryKey: ['singerCategories'],
    queryFn: getSingerCategories
  })
}
