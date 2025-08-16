import React, { Component } from 'react'
import './PlayerProgress.less'
import { secondToMin } from '../../assets/js/utils'

interface PlayerProgressProps {
  audioElRef: object;
  progressBarRef: object;
  currentTime: number;
  currentProgress: number;
  loadProgress: number;
  onTouchStart(...args: unknown[]): unknown;
}

class PlayerProgress extends Component<PlayerProgressProps> {
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
export default PlayerProgress
