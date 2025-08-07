import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './AppMusicList.less'
import { fetchMusicIfNeeded, switchPlayerMed } from '../../redux/actions/player'
import { player } from '../../constants/router'
class AppMusicList extends Component {
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
            onClick={e => {
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
              onClick={e => e.stopPropagation}
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
AppMusicList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      hash: PropTypes.string.isRequired,
      filename: PropTypes.string.isRequired
    })
  ).isRequired,
  renderMusicSequence: PropTypes.func
}
AppMusicList.defaultProps = {
  renderMusicSequence: () => undefined
}
export default withRouter(
  connect(
    null,
    null
  )(AppMusicList)
)
