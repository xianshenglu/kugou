import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './PlayerLyric.less'
class PlayerLyric extends Component {
  constructor(props) {
    super(props)
    this.lyricsRef = []
  }
  componentDidUpdate() {
    const { prevLyricIndex } = this.props
    this.lyricsRef[prevLyricIndex] &&
      this.lyricsRef[prevLyricIndex].current.scrollIntoView()
  }
  render() {
    this.lyricsRef = []
    const { lyrics, prevLyricIndex, toggleIsTouching } = this.props
    return (
      <div
        className="PlayerLyric"
        onTouchStart={() => toggleIsTouching(true)}
        onTouchEnd={() => toggleIsTouching(false)}
      >
        {lyrics.map((lyric, index) => {
          const lyricRef = React.createRef()
          this.lyricsRef.push(lyricRef)
          return (
            <p
              key={index}
              ref={lyricRef}
              className={classNames('PlayerLyric_text', {
                'PlayerLyric_text--active': index === prevLyricIndex + 1
              })}
            >
              {lyric.text}
            </p>
          )
        })}
      </div>
    )
  }
}
PlayerLyric.propTypes = {
  lyrics: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  prevLyricIndex: PropTypes.number.isRequired,
  toggleIsTouching: PropTypes.func.isRequired
}
export default PlayerLyric
