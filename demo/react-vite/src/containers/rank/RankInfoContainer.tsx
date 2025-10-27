import type { FC } from 'react'
import { useEffect } from 'react'
import RankInfo from '../../components/rank/RankInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRankInfoIfNeeded } from '../../redux/actions/rankInfo'
import { useParams } from 'react-router-dom'

const RankInfoContainer: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { songsData, listInfo } = useSelector((state: any) => ({
    songsData: state.rankInfo.songsData,
    listInfo: state.rankInfo.listInfo
  }))

  useEffect(() => {
      dispatch(fetchRankInfoIfNeeded(id))
  }, [])

  return <RankInfo songsData={songsData} listInfo={listInfo} />
}

export default RankInfoContainer
