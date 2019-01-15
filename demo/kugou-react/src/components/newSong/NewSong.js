import React from 'react'
import AppMusicList from '../public/AppMusicList'
import NewSongSlider from './NewSongSlider'
import './NewSong.less'
function NewSong({ songs, sliderData }) {
  return (
    <React.Fragment>
      <NewSongSlider data={sliderData} />
      <AppMusicList data={songs} />
    </React.Fragment>
  )
}
export default NewSong
