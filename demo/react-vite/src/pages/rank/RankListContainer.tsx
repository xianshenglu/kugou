import type { FC } from 'react'
import RankList from './RankList'
import { useGetRankListQuery } from './rankListApi'
import { Loading } from 'src/components/Loading'

const RankListContainer: FC = () => {
  const { data, error, isLoading } = useGetRankListQuery()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading rank list</div>
  if (!data) return null
  return <RankList rankList={data!} />
}

export default RankListContainer
