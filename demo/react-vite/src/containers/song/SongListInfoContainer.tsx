import type { FC } from 'react'
import { useEffect } from 'react'
import SongListInfo from '../../components/song/SongListInfo'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSongListInfoIfNeeded } from '../../redux/actions/songListInfo'
import { useParams } from 'react-router-dom'

const SongListInfoContainer: FC = () => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const { songsData, listInfo } = useSelector((state: any) => ({
    songsData: state.songListInfo.songsData,
    listInfo: state.songListInfo.listInfo
  }))
  useEffect(() => {
      dispatch(fetchSongListInfoIfNeeded(id))
  }, [])

  return <SongListInfo songsData={songsData} listInfo={listInfo} />
}

export default SongListInfoContainer
