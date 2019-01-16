import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './AppMusicList.less'
class AppMusicList extends Component {
  render() {
    const { data, renderMusicSequence } = this.props
    return (
      <ul className="AppMusicList">
        {data.map((music, index) => (
          <li
            className="AppMusicList__item main_border_bottom"
            key={music.hash}
          >
            <div className="AppMusicList__info">
              {renderMusicSequence(index)}
              <div className="AppMusicList__name">{music.filename}</div>
            </div>
            <button className="AppMusicList__download">
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
      hash: PropTypes.isRequired,
      filename: PropTypes.isRequired
    })
  ).isRequired,
  renderMusicSequence: PropTypes.func
}
AppMusicList.defaultProps = {
  renderMusicSequence: () => undefined
}
export default AppMusicList
