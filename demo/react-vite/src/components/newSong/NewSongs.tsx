import React, { lazy } from 'react'
import AppMusicList from '../public/AppMusicList'
const NewSongsSlider = lazy(() => import('./NewSongsSlider'))
import './NewSongs.less'

interface NewSongsProps {
  songs: unknown[];
  sliderData: unknown[];
}

function NewSongs({
  songs,
  sliderData
}: NewSongsProps) {
  return (
    <React.Fragment>
      <NewSongsSlider banners={sliderData} />
      <AppMusicList data={songs} />
    </React.Fragment>
  )
}
export default NewSongs
