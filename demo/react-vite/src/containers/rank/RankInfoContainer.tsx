import type { FC } from 'react'
import RankInfo from '../../components/rank/RankInfo'
import { useParams } from 'react-router-dom'
import { useGetRankInfoQuery } from './rankInfoApi'
import { Loading } from 'src/components/loading/Loading'

const RankInfoContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetRankInfoQuery(id!)
  if (isLoading) return <Loading />
  if (error) return <div>Error loading rank info</div>
  if (!data) return null

  return <RankInfo songsData={data.songs} listInfo={data.info} />
}

export default RankInfoContainer
