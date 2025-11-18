import type { FC } from 'react'
import RankInfo from './RankInfo'
import { useParams } from 'react-router-dom'
import { useGetRankInfoQuery } from './useRankInfo'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const RankInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const query = useGetRankInfoQuery(id!)

  return (
    <QueryBoundary query={query}>
      {(data) => <RankInfo songsData={data.songs} listInfo={data.info} />}
    </QueryBoundary>
  )
}

export default RankInfoPage
