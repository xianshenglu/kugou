import type { FC } from 'react'
import SingerList from './SingerList'
import { useGetSingerListQuery } from './useSingerList'
import { useParams } from 'react-router-dom'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const SingerListPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const query = useGetSingerListQuery(id!)

  return (
    <QueryBoundary query={query}>
      {(data) => <SingerList singersData={data} />}
    </QueryBoundary>
  )
}

export default SingerListPage
