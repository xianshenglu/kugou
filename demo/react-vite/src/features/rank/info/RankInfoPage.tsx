import type { FC } from 'react'
import RankInfo from './RankInfo'
import { useParams } from 'react-router-dom'
import { useGetRankInfoQuery } from './useRankInfo'
import { Loading } from 'src/shared/components/Loading'

const RankInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetRankInfoQuery(id!)
  if (isLoading) return <Loading />
  if (error) return <div>Error loading rank info</div>
  if (!data) return null

  return <RankInfo songsData={data.songs} listInfo={data.info} />
}

export default RankInfoPage

