import React from 'react'
import AppMusicList from '../public/AppMusicList'
import './NewSongs.module.less'
import { lazyWithPrefetch } from 'src/assets/hoc/lazyWithPrefetch'
const NewSongsSlider = lazyWithPrefetch(() => import('./NewSongsSlider'))

interface NewSongsProps {
  songs: unknown[]
  sliderData: unknown[]
}

function NewSongs({ songs, sliderData }: NewSongsProps) {
  return (
    <React.Fragment>
      <NewSongsSlider banners={sliderData} />
      <AppMusicList data={songs} />
    </React.Fragment>
  )
}
export default NewSongs
