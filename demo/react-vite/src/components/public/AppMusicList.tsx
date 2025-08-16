import React, { Component } from 'react'
import { connect } from 'react-redux'
import './AppMusicList.less'
import { fetchMusicIfNeeded, switchPlayerMed } from '../../redux/actions/player'
import { player } from '../../constants/router'
import { useLocation } from 'react-router-dom'

interface AppMusicListProps {
  data: {
    hash: string;
    filename: string;
  }[];
  renderMusicSequence?(...args: unknown[]): unknown;
}

class AppMusicList extends Component<AppMusicListProps> {
  render() {
    const {
      data,
      renderMusicSequence,
      dispatch,
      location: { pathname }
    } = this.props
    return (
      <ul className="AppMusicList">
        {data.map((music, index) => (
          <li
            className="AppMusicList__item main_border_bottom"
            key={music.hash}
            onClick={(e) => {
              dispatch(fetchMusicIfNeeded(music.hash, index, data))
              dispatch(switchPlayerMed(pathname !== player))
            }}
          >
            <div className="AppMusicList__info">
              {renderMusicSequence(index)}
              <div className="AppMusicList__name">{music.filename}</div>
            </div>
            <button
              className="AppMusicList__download"
              onClick={(e) => e.stopPropagation}
            >
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
AppMusicList.defaultProps = {
  renderMusicSequence: () => undefined
}
function AppMusicListWrapper(props) {
  const location = useLocation()
  return <AppMusicList {...props} location={location} />
}
export default connect(null, null)(AppMusicListWrapper)
