import type { FC } from 'react'
import { useEffect } from 'react'
import RankList from '../../components/rank/RankList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRankListIfNeeded } from '../../redux/actions/rankList'

const RankListContainer: FC = () => {
  const dispatch = useDispatch()
  const rankList = useSelector((state: any) => state.rankList)

  useEffect(() => {
    dispatch(fetchRankListIfNeeded())
  }, [dispatch])
  return <RankList {...rankList} />
}

export default RankListContainer
