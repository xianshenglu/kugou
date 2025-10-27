import type { FC } from 'react'
import SingerInfo from '../../components/singer/SingerInfo'
import { useGetSingerInfoQuery } from './singerInfoApi'
import { useParams } from 'react-router-dom'
import { Loading } from 'src/components/loading/Loading'

const SingerInfoContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetSingerInfoQuery(id!)

  if (isLoading) return <Loading />
  if (error) return <div>Error loading singer info</div>
  if (!data) return null

  return <SingerInfo {...data} />
}

export default SingerInfoContainer
