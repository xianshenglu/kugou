import type { FC } from 'react'
import { useEffect } from 'react'
import NewSongs from '../../components/newSong/NewSongs'
import useNewSongsStore from './useNewSongsStore'

const NewSongsContainer: FC = () => {
  const { songs, sliderData, fetchNewSongsIfNeeded } = useNewSongsStore()

  useEffect(() => {
    fetchNewSongsIfNeeded()
  }, [fetchNewSongsIfNeeded])

  return <NewSongs songs={songs} sliderData={sliderData} />
}

export default NewSongsContainer
