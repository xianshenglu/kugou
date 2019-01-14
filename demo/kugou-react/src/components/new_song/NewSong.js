import React, { Component } from 'react'
import AppMusicList from '../public/AppMusicList'
import AppHeader from '../public/AppHeader'
import './NewSong.less'
class NewSong extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        <AppHeader />
        <AppMusicList data={this.props.songs} />
      </React.Fragment>
    )
  }
}
export default NewSong
