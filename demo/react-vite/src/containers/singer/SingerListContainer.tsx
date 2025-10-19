import type { FC } from 'react'
import { useEffect } from 'react'
import SingerList from '../../components/singer/SingerList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingerListIfNeeded } from '../../redux/actions/singerList'
import { useParams } from 'react-router-dom'

const SingerListContainer: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { singersData, listInfo } = useSelector((state: any) => ({
    singersData: state.singerList.singersData,
    listInfo: state.singerList.listInfo
  }))

  useEffect(() => {
      dispatch(fetchSingerListIfNeeded(id))
  }, [])

  return <SingerList singersData={singersData} listInfo={listInfo} />
}

export default SingerListContainer
