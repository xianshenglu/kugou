import React, { Component } from 'react'
import { connect } from 'react-redux'
import PlayerProgress from '../../components/player/PlayerProgress'
class PlayerProgressContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: 0,
      loadProgress: 0,
      currentProgress: 0,
      isTouching: false
    }
    this.progressBarRef = React.createRef()
    this.progressCb = this.progressCb.bind(this)
    this.timeUpdateCb = this.timeUpdateCb.bind(this)
    this.setCurTime = this.setCurTime.bind(this)
    this.setCurTimeOnMove = this.setCurTimeOnMove.bind(this)
    this.touchEndCb = this.touchEndCb.bind(this)
  }
  progressCb() {
    // todo songs wouldn't download all now or user jumped. They all make the progress bar wouldn't continuous. So, the style may need change.
    const {
      audioElRef: { current: audioEl }
    } = this.props
    if (audioEl.readyState < 2) {
      return
    }
    let bufferedLength = audioEl.buffered.length
    const loadProgress = Math.floor(
      (100 * audioEl.buffered.end(bufferedLength - 1)) / audioEl.duration
    )
    this.setState({ loadProgress })
  }
  timeUpdateCb(event) {
    if (this.state.isTouching) {
      return
    }
    const {
      audioElRef: {
        current: { duration }
      }
    } = this.props
    const currentTime = event.target.currentTime
    const currentProgress = Math.floor((100 * currentTime) / duration)
    this.setState({ currentTime, currentProgress })
  }
  setCurTime(event) {
    this.setState({ isTouching: true })
    if (!this.progressBarRect) {
      this.progressBarRect = this.progressBarRef.current.getBoundingClientRect()
    }
    let clientX = event.touches[0].clientX
    const currentTime = this.calcCurTime(clientX, this.progressBarRect.left, 0)
    const {
      audioElRef: {
        current: { duration }
      }
    } = this.props
    const currentProgress = Math.floor((100 * currentTime) / duration)
    this.setState({ currentTime, currentProgress })
    this.touchStartX = clientX
    window.addEventListener('touchmove', this.setCurTimeOnMove)
    window.addEventListener('touchend', this.touchEndCb)
  }
  setCurTimeOnMove(event) {
    let clientX = event.touches[0].clientX
    const currentTime = this.calcCurTime(clientX, this.touchStartX, 1)
    const {
      audioElRef: {
        current: { duration }
      }
    } = this.props
    const currentProgress = Math.floor((100 * currentTime) / duration)
    this.setState({ currentTime, currentProgress })
    this.touchStartX = clientX
  }
  touchEndCb() {
    const {
      audioElRef: { current: audioEl }
    } = this.props
    this.setState({ isTouching: false })
    audioEl.currentTime = this.state.currentTime
    window.removeEventListener('touchmove', this.setCurTimeOnMove)
    window.removeEventListener('touchend', this.touchEndCb)
  }
  calcCurTime(end, start, type) {
    let offsetX = end - start
    let percent = offsetX / this.progressBarRect.width
    let currentTime
    const {
      audioElRef: {
        current: { duration }
      }
    } = this.props
    switch (type) {
      case 0:
        currentTime = duration * percent
        break
      case 1:
        currentTime = this.state.currentTime + duration * percent
        break
    }
    if (currentTime < 0) {
      currentTime = 0
    } else if (currentTime > duration) {
      currentTime = duration
    }
    return currentTime
  }
  componentDidMount() {
    const {
      audioElRef: { current: audioEl }
    } = this.props
    audioEl.addEventListener('progress', this.progressCb)
    audioEl.addEventListener('timeupdate', this.timeUpdateCb)
  }
  componentWillUnmount() {
    const {
      audioElRef: { current: audioEl }
    } = this.props
    audioEl.removeEventListener('progress', this.progressCb)
    audioEl.removeEventListener('timeupdate', this.timeUpdateCb)
  }
  render() {
    const { audioElRef } = this.props
    const props = {
      audioElRef,
      ...this.state,
      onTouchStart: this.setCurTime,
      progressBarRef: this.progressBarRef
    }
    return <PlayerProgress {...props} />
  }
}
const mapStateToProps = ({ player: { audioElRef } }) => ({ audioElRef })

export default connect(
  mapStateToProps,
  null
)(PlayerProgressContainer)
