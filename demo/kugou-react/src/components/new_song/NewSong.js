import React from 'react'
import AppMusicList from '../public/AppMusicList'
import NewSongSlider from './NewSongSlider'
import './NewSong.less'
import AppContent from '../public/AppContent'
function NewSong({ songs, sliderData }) {
  return (
    <AppContent hasNav={true}>
      <NewSongSlider data={sliderData} />
      <AppMusicList data={songs} />
    </AppContent>
  )
}
export default NewSong
