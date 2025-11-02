import type { FC } from 'react'
import styles from './PlayerProgress.module.less'
import { secondToMin } from './helpers/time';

interface PlayerProgressProps {
  audioElRef: object;
  progressBarRef: object;
  currentTime: number;
  currentProgress: number;
  loadProgress: number;
  onTouchStart(...args: unknown[]): unknown;
}

const PlayerProgress: FC<PlayerProgressProps> = ({
  audioElRef: { current: audioElRefCur },
  progressBarRef,
  currentTime,
  currentProgress,
  loadProgress,
  onTouchStart
}) => {
  const audioEl = audioElRefCur === null ? { duration: 0 } : audioElRefCur
  const progressBarStyle = {
    backgroundImage: `linear-gradient(to right, #2ca2f9 ${currentProgress}%, transparent ${currentProgress}%),linear-gradient(to right, #6c6b70 ${loadProgress}%, transparent ${loadProgress}%)`,
    color: 'red'
  }

  return (
    <div className={styles.PlayerProgress} onTouchStart={onTouchStart}>
      <div className={styles.PlayerProgress__songCurTime}>
        {secondToMin(currentTime)}
      </div>
      <div
        className={styles.PlayerProgress__progressBar}
        ref={progressBarRef}
        style={progressBarStyle}
      >
        <div
          className={styles.PlayerProgress__progressBarPointer}
          style={{ left: currentProgress + '%' }}
        />
      </div>
      <div className={styles.PlayerProgress__songDuration}>
        {secondToMin(audioEl.duration)}
      </div>
    </div>
  )
}

export default PlayerProgress
