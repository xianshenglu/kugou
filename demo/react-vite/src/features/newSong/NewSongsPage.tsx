import type { FC } from 'react'
import { useEffect } from 'react'
import NewSongs from './NewSongs'
import useNewSongsStore from './useNewSongsStore'

const NewSongsPage: FC = () => {
  const { songs, sliderData, fetchNewSongsIfNeeded } = useNewSongsStore()

  useEffect(() => {
    fetchNewSongsIfNeeded()
  }, [fetchNewSongsIfNeeded])

  return <NewSongs songs={songs} sliderData={sliderData} />
}

export default NewSongsPage

