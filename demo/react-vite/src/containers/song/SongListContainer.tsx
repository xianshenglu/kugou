import type { FC } from 'react'
import { useEffect } from 'react'
import SongList from '../../components/song/SongList'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongListIfNeeded } from '../../redux/actions/songList'

const SongListContainer: FC = () => {
  const dispatch = useDispatch()
  const songList = useSelector((state: any) => state.songList)

  useEffect(() => {
    dispatch(fetchSongListIfNeeded())
  }, [])

  return <SongList {...songList} />
}

export default SongListContainer
