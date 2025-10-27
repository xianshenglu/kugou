import type { FC } from 'react'
import { useState, useEffect } from 'react'
import { useMemoizedFn } from 'ahooks'
import PlayerLyric from '../../components/player/PlayerLyric'
import { getFormattedLyrics } from './helpers/lyric'
import usePlayerStore from '../../stores/usePlayerStore'
const PlayerLyricContainer: FC = () => {
  const [prevLyricIndex, setPrevLyricIndex] = useState(0)
  const [isTouching, setIsTouching] = useState(false)

  const { songInfo: { lyric }, audioElRef } = usePlayerStore()

  const toggleIsTouching = useMemoizedFn((touching: boolean) => {
    setIsTouching(touching)
  })
  const timeUpdateCb = useMemoizedFn((event: Event) => {
    if (isTouching) {
      return
    }
    const lyrics = getFormattedLyrics(lyric)
    const lyricsMillisecond = lyrics.map(o => o.millisecond)
    const curMillisecond = Math.floor((event.target as HTMLAudioElement).currentTime * 1000)
    const nextLyricIndex = lyricsMillisecond.findIndex(
      (time: number) => time > curMillisecond * 1.005
    )
    const newPrevLyricIndex = nextLyricIndex > 1 ? nextLyricIndex - 2 : 0
    setPrevLyricIndex(newPrevLyricIndex)
  })

  useEffect(() => {
    const audioEl = audioElRef.current
    if (audioEl) {
      audioEl.addEventListener('timeupdate', timeUpdateCb)
      return () => {
        audioEl.removeEventListener('timeupdate', timeUpdateCb)
      }
    }
  }, [audioElRef])

  const lyrics = getFormattedLyrics(lyric)
  const targetProps = {
    lyrics,
    prevLyricIndex,
    toggleIsTouching
  }

  return <PlayerLyric {...targetProps} />
}

export default PlayerLyricContainer
