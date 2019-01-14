import React, { Component } from 'react'
import './AppMusicList.less'
class AppMusicList extends Component {
  render() {
    return (
      <ul className="music_list">
        {this.props.data.map(music => (
          <li className="music_list__item main_border_bottom" key={music.hash}>
            <div className="music_list__info" Onclick={() => this.props.play()}>
              {/* <slot :data="index" name="index" className="music_list__index" Onclick={()=>this.props.play()}></slot> */}
              <div className="music_list__name">{music.filename}</div>
            </div>
            <button className="music_list__download">
              <svg className="icon" aria-hidden="true">
                <use xlinkHref="#icon-download" />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
export default AppMusicList
