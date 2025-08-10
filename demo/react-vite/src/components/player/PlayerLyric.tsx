import React, { Component } from 'react'
import classNames from 'classnames'
import './PlayerLyric.less'

interface PlayerLyricProps {
  lyrics: {
    text: string;
  }[];
  prevLyricIndex: number;
  toggleIsTouching(...args: unknown[]): unknown;
}

class PlayerLyric extends Component<PlayerLyricProps> {
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
export default PlayerLyric
