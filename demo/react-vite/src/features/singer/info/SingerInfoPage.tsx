import type { FC } from 'react'
import SingerInfo from './SingerInfo'
import { useGetSingerInfoQuery } from './useSingerInfo'
import { useParams } from 'react-router-dom'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const SingerInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const query = useGetSingerInfoQuery(id!)

  return (
    <QueryBoundary query={query}>
      {(data) => <SingerInfo {...data} />}
    </QueryBoundary>
  )
}

export default SingerInfoPage
