import type { FC } from 'react'
import { useEffect } from 'react'
import SingerInfo from '../../components/singer/SingerInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingerInfoIfNeeded } from '../../redux/actions/singerInfo'
import { useParams } from 'react-router-dom'

const SingerInfoContainer: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { songsData, listInfo } = useSelector((state: any) => ({
    songsData: state.singerInfo.songsData,
    listInfo: state.singerInfo.listInfo
  }))

  useEffect(() => {
      dispatch(fetchSingerInfoIfNeeded(id))
  }, [])

  return <SingerInfo songsData={songsData} listInfo={listInfo} />
}

export default SingerInfoContainer
