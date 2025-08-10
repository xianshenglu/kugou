import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerLyric from '../../components/player/PlayerLyric'
import { getFormattedLyrics, getLyricsMillisecond } from '../../redux/selectors'
class PlayerLyricContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      prevLyricIndex: 0,
      isTouching: false
    }
    this.timeUpdateCb = this.timeUpdateCb.bind(this)
    this.toggleIsTouching = this.toggleIsTouching.bind(this)
  }
  toggleIsTouching(isTouching) {
    this.setState({ isTouching })
  }
  componentDidMount() {
    const {
      audioElRef: { current: audioEl }
    } = this.props
    audioEl.addEventListener('timeupdate', this.timeUpdateCb)
  }
  componentWillUnmount() {
    const {
      audioElRef: { current: audioEl }
    } = this.props
    audioEl.removeEventListener('timeupdate', this.timeUpdateCb)
  }
  timeUpdateCb(event) {
    const { isTouching } = this.state
    if (isTouching) {
      return
    }
    const { lyric } = this.props
    const lyrics = getFormattedLyrics(lyric)
    const lyricsMillisecond = getLyricsMillisecond(lyrics)
    let curMillisecond = Math.floor(event.target.currentTime * 1000)
    let nextLyricIndex = lyricsMillisecond.findIndex(
      time => time > curMillisecond * 1.005
    )
    let prevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0
    this.setState({ prevLyricIndex })
  }
  render() {
    const { lyric } = this.props
    const { prevLyricIndex } = this.state
    const lyrics = getFormattedLyrics(lyric)
    const targetProps = {
      lyrics,
      prevLyricIndex,
      toggleIsTouching: this.toggleIsTouching
    }
    return <PlayerLyric {...targetProps} />
  }
}
const mapStateToProps = ({
  player: {
    songInfo: { lyric },
    audioElRef
  }
}) => ({ lyric, audioElRef })

export default connect(
  mapStateToProps,
  null
)(PlayerLyricContainer)
