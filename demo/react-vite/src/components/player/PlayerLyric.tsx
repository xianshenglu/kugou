import { useEffect, useRef, type FC } from 'react'
import classNames from 'classnames'
import './PlayerLyric.module.less'
import styles from './PlayerLyric.module.less'

interface PlayerLyricProps {
  lyrics: {
    text: string;
  }[];
  prevLyricIndex: number;
  toggleIsTouching(...args: unknown[]): unknown;
}

const PlayerLyric: FC<PlayerLyricProps> = ({ lyrics, prevLyricIndex, toggleIsTouching }) => {
  const lyricElementsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const setLyricElement = (
    index: number,
    element: HTMLParagraphElement | null
  ) => {
    lyricElementsRef.current[index] = element
    return () => {
      lyricElementsRef.current.splice(index, 1)
    }
  }
  useEffect(() => {
      lyricElementsRef.current[prevLyricIndex]?.scrollIntoView();
  }, [prevLyricIndex]);

  return (
    <div
      className={styles.PlayerLyric}
      onTouchStart={() => toggleIsTouching(true)}
      onTouchEnd={() => toggleIsTouching(false)}
    >
      {lyrics.map((lyric, index) => {
        return (
          <p
            key={index}
            ref={el=>setLyricElement(index, el)}
            className={classNames(styles.PlayerLyric_text, {
              [styles['PlayerLyric_text--active']]: index === prevLyricIndex + 1
            })}
          >
            {lyric.text}
          </p>
        )
      })}
    </div>
  )
}
export default PlayerLyric
