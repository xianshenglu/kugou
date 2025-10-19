import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useMemoizedFn } from 'ahooks'
import { fetchMusicIfNeeded } from 'src/redux/actions/player'
import { player } from 'src/constants/router'

export function useNextPrevSong(songList: any[], songIndex: number) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()

  const dispatchAndRedirect = useMemoizedFn((hash: string, idx: number, list: any[]) => {
    ;(dispatch as any)(fetchMusicIfNeeded(hash, idx, list))
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
