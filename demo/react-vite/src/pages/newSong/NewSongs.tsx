import React from 'react'
import AppMusicList from '../../components/AppMusicList'
import './NewSongs.module.less'
import { lazyWithPrefetch } from 'src/helpers/lazyWithPrefetch'
const NewSongsSlider = lazyWithPrefetch(() => import('./NewSongsSlider'))
// todo move to @shared
interface NewSongBanner {
  id: number
  imgurl: string
  title: string
}
interface NewSongsProps {
  songs: { hash: string; filename: string }[]
  sliderData: NewSongBanner[]
}

function NewSongs({ songs, sliderData }: NewSongsProps) {
  return (
    <React.Fragment>
      <NewSongsSlider banners={sliderData} />
      <AppMusicList data={songs} test-id="page-new-song" />
    </React.Fragment>
  )
}
export default NewSongs
