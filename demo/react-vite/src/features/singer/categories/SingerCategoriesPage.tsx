import type { FC } from 'react'
import SingerCategories from './SingerCategories'
import { useGetSingerCategoriesQuery } from './useSingerCategories'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const SingerCategoriesPage: FC = () => {
  const query = useGetSingerCategoriesQuery()

  return (
    <QueryBoundary query={query}>
      {(data) => <SingerCategories singerCategories={data} />}
    </QueryBoundary>
  )
}

export default SingerCategoriesPage
