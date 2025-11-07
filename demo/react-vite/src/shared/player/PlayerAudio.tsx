import { useMemoizedFn } from 'ahooks'
import usePlayerStore from './usePlayerStore'

export function PlayerAudio() {
  const { songInfo, audioElRef, hideMusicLoading, playMusic, pauseMusic } = usePlayerStore()

  const canPlayCb = useMemoizedFn((e: any) => {
    hideMusicLoading()
    e.target
      .play()
      .then(() => playMusic())
      .catch(() => pauseMusic())
  })

  return (
    <audio
      src={songInfo.play_url || undefined}
      className="hidden"
      ref={audioElRef}
      loop
      onCanPlay={canPlayCb}
    />
  )
}

