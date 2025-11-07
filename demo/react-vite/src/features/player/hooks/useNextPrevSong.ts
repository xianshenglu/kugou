import { useNavigate, useLocation } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import usePlayerStore from 'src/shared/player/usePlayerStore'
import { player } from 'src/shared/constants/router'

export function useNextPrevSong(songList: any[], songIndex: number) {
  const navigate = useNavigate()
  const location = useLocation()
  const { fetchMusicIfNeeded } = usePlayerStore()

  const dispatchAndRedirect = useMemoizedFn((hash: string, idx: number, list: any[]) => {
    fetchMusicIfNeeded(hash, idx, list)
    const pathname = location.pathname
    if (pathname === player) {
      navigate(pathname + '?musicHash=' + hash, { replace: true })
    }
  })

  const nextSong = useMemoizedFn(() => {
    const targetSongIndex = songList[songIndex + 1] === undefined ? 0 : songIndex + 1
    dispatchAndRedirect(songList[targetSongIndex].hash, targetSongIndex, songList)
  })

  const prevSong = useMemoizedFn(() => {
    const targetSongIndex = songList[songIndex - 1] === undefined ? songList.length - 1 : songIndex - 1
    dispatchAndRedirect(songList[targetSongIndex].hash, targetSongIndex, songList)
  })

  return { nextSong, prevSong }
}
