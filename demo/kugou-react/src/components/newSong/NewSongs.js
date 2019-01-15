import React from 'react'
import AppMusicList from '../public/AppMusicList'
import NewSongsSlider from './NewSongsSlider'
import './NewSongs.less'
function NewSongs({ songs, sliderData }) {
  return (
    <React.Fragment>
      <NewSongsSlider data={sliderData} />
      <AppMusicList data={songs} />
    </React.Fragment>
  )
}
export default NewSongs
