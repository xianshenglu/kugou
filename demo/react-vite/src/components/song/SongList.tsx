import React, { Component } from 'react'
import './SongList.less'
import AppList from '../public/AppList'

interface SongListProps {
  songList: {
    name: string;
    popularity: number;
  }[];
}

class SongList extends Component<SongListProps> {
  getChildren({ name, popularity }) {
    return (
      <div className="SongList__info">
        <div className="SongList__name">{name}</div>
        <div className="SongList__star">
          <svg className="icon SongList__icon" aria-hidden="true">
            <use xlinkHref="#icon-music" />
          </svg>
          <span className="SongList__popularity">{popularity}</span>
        </div>
      </div>
    )
  }
  render() {
    const { songList } = this.props
    return (
      <AppList data={songList} render={this.getChildren} className="SongList" />
    )
  }
}
export default SongList
