import type { FC } from 'react'
import SingerCategories from './SingerCategories'
import { useGetSingerCategoriesQuery } from './singerCategoriesApi'

const SingerCategoriesContainer: FC = () => {
  const { data: singerCategories = [] } = useGetSingerCategoriesQuery()

  return <SingerCategories singerCategories={singerCategories} />
}

export default SingerCategoriesContainer
