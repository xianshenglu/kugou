import type { FC } from 'react'
import { useEffect } from 'react'
import PlayerMax from './PlayerMax'
import usePlayerStore from '../../stores/usePlayerStore'
import { useLocation, useNavigate } from 'react-router-dom'
import { useNextPrevSong } from 'src/hooks/useNextPrevSong'

const PlayerMaxContainer: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { 
    musicStatus, 
    songInfo, 
    audioElRef, 
    songIndex, 
    songList, 
    fetchMusicIfNeeded 
  } = usePlayerStore()

  useEffect(() => {
    const { play_url } = songInfo
    if (play_url === '') {
      const musicHash = new URLSearchParams(location.search).get('musicHash')
      if (musicHash) {
        fetchMusicIfNeeded(musicHash, 0, [{ hash: musicHash }] as any)
      }
    }
  }, [location.search, songInfo, fetchMusicIfNeeded])

  const playerProps = {
    musicStatus,
    songInfo,
    audioElRef,
    songIndex,
    songList,
    location,
    navigate
  }

  const { nextSong, prevSong } = useNextPrevSong(songList, songIndex)

  return <PlayerMax {...playerProps} nextSong={nextSong} prevSong={prevSong} />
}

export default PlayerMaxContainer
