import type { FC } from 'react'
import RankList from './RankList'
import { useGetRankListQuery } from './useRankList'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const RankListPage: FC = () => {
  const query = useGetRankListQuery()

  return (
    <QueryBoundary query={query}>
      {(data) => <RankList rankList={data} />}
    </QueryBoundary>
  )
}

export default RankListPage
