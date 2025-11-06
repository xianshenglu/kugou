import type { FC } from 'react'
import SingerInfo from './SingerInfo'
import { useGetSingerInfoQuery } from './useSingerInfo'
import { useParams } from 'react-router-dom'
import { Loading } from 'src/shared/components/Loading'

const SingerInfoPage: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetSingerInfoQuery(id!)

  if (isLoading) return <Loading />
  if (error) return <div>Error loading singer info</div>
  if (!data) return null

  return <SingerInfo {...data} />
}

export default SingerInfoPage

