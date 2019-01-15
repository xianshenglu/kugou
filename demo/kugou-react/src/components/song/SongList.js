import React, { Component } from 'react'
import './SongList.less'
import AppList from '../public/AppList'
class SongList extends Component {
  getChildren({ name, popularity }) {
    return (
      <div className="song_list__info">
        <div className="song_list__name">{name}</div>
        <div className="song_list__star">
          <svg className="icon song_list__icon" aria-hidden="true">
            <use xlinkHref="#icon-music" />
          </svg>
          <span className="song_list__popularity">{popularity}</span>
        </div>
      </div>
    )
  }
  render() {
    const { songList } = this.props
    return <AppList data={songList} render={this.getChildren} />
  }
}
export default SongList
