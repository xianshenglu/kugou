import type { FC } from 'react'
import SingerList from './SingerList'
import { useGetSingerListQuery } from './singerListApi'
import { useParams } from 'react-router-dom'
import { Loading } from 'src/components/Loading'

const SingerListContainer: FC = () => {
  const { id } = useParams<{ id: string }>()
  const { data, isLoading, error } = useGetSingerListQuery(id!)

  if (isLoading) return <Loading />
  if (error) return <div>Error loading singers</div>
  if (!data) return null

  return <SingerList singersData={data}/>
}

export default SingerListContainer
