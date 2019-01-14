import React, { Component } from 'react'
import AppMusicList from '../public/AppMusicList'
import AppHeader from '../public/AppHeader'
import NewSongSlider from './NewSongSlider'
import AppNav from '../public/AppNav'
import './NewSong.less'
class NewSong extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="new_song">
        <AppHeader />
        <AppNav />
        <NewSongSlider data={this.props.sliderData} />
        <AppMusicList data={this.props.songs} />
      </div>
    )
  }
}
export default NewSong
