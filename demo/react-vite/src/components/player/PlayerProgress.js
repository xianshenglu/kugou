import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './PlayerProgress.less'
import { secondToMin } from '../../assets/js/utils'
class PlayerProgress extends Component {
  render() {
    const {
      audioElRef: { current: audioElRefCur },
      progressBarRef,
      currentTime,
      currentProgress,
      loadProgress,
      onTouchStart
    } = this.props
    const audioEl = audioElRefCur === null ? { duration: 0 } : audioElRefCur
    const progressBarStyle = {
      backgroundImage: `linear-gradient(to right, #2ca2f9 ${currentProgress}%, transparent ${currentProgress}%),linear-gradient(to right, #6c6b70 ${loadProgress}%, transparent ${loadProgress}%)`,
      color: 'red'
    }

    return (
      <div className="PlayerProgress" onTouchStart={onTouchStart}>
        <div className="PlayerProgress__songCurTime">
          {secondToMin(currentTime)}
        </div>
        <div
          className="PlayerProgress__progressBar"
          ref={progressBarRef}
          style={progressBarStyle}
        >
          <div
            className="PlayerProgress__progressBarPointer"
            style={{ left: currentProgress + '%' }}
          />
        </div>
        <div className="PlayerProgress__songDuration">
          {secondToMin(audioEl.duration)}
        </div>
      </div>
    )
  }
}
PlayerProgress.propTypes = {
  audioElRef: PropTypes.object.isRequired,
  progressBarRef: PropTypes.object.isRequired,
  currentTime: PropTypes.number.isRequired,
  currentProgress: PropTypes.number.isRequired,
  loadProgress: PropTypes.number.isRequired,
  onTouchStart: PropTypes.func.isRequired
}
export default PlayerProgress
