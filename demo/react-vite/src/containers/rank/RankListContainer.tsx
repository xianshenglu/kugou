import type { FC } from 'react'
import RankList from '../../components/rank/RankList'
import { useGetRankListQuery } from './rankListApi'
import { Loading } from 'src/components/loading/Loading'

const RankListContainer: FC = () => {
  const { data, error, isLoading } = useGetRankListQuery()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading rank list</div>
  if (!data) return null
  return <RankList rankList={data!} />
}

export default RankListContainer
