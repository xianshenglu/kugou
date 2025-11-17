import type { FC } from 'react'
import SingerCategories from './SingerCategories'
import { useGetSingerCategoriesQuery } from './useSingerCategories'
import { Loading } from 'src/shared/components/Loading'

const SingerCategoriesPage: FC = () => {
  const { data, error, isLoading } = useGetSingerCategoriesQuery()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading singer categories</div>
  if (!data) return null

  return <SingerCategories singerCategories={data} />
}

export default SingerCategoriesPage

