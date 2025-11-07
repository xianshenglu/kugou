import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import usePlayerStore from '../player/usePlayerStore'
import { player } from '../constants/router'

export function useGlobalPlayerMedVisibility() {
  const location = useLocation()
  const songInfo = usePlayerStore((s) => s.songInfo)
  const isPlayerMedShow = usePlayerStore((s) => s.isPlayerMedShow)
  const switchPlayerMed = usePlayerStore((s) => s.switchPlayerMed)

  const onLocationChange = useMemoizedFn(({ pathname }: { pathname: string }) => {
    const play_url = songInfo.play_url
    const targetStatus = pathname !== player && play_url !== ''
    if (isPlayerMedShow !== targetStatus) {
      switchPlayerMed(targetStatus)
    }
  })

  useEffect(() => {
    onLocationChange(location)
  }, [location, onLocationChange])
}

