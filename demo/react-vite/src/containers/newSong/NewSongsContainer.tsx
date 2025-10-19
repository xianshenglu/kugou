import type { FC } from 'react'
import { useEffect } from 'react'
import NewSongs from '../../components/newSong/NewSongs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchNewSongsIfNeeded } from '../../redux/actions/newSongs'

const NewSongsContainer: FC = () => {
  const dispatch = useDispatch()
  const { songs, sliderData } = useSelector((state: any) => ({
    songs: state.newSongs.songs,
    sliderData: state.newSongs.sliderData
  }))

  useEffect(() => {
    dispatch(fetchNewSongsIfNeeded())
  }, [dispatch])

  return <NewSongs songs={songs} sliderData={sliderData} />
}

export default NewSongsContainer
