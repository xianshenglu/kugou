import type { FC } from 'react'
import { useEffect } from 'react'
import PlayerMax from '../../components/player/PlayerMax'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMusicIfNeeded } from '../../redux/actions/player'
import { useLocation, useNavigate } from 'react-router-dom'
import { useNextPrevSong } from 'src/hooks/useNextPrevSong'

const PlayerMaxContainer: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { musicStatus, songInfo, audioElRef, songIndex, songList } = useSelector((state: any) => ({
    musicStatus: state.player.musicStatus,
    songInfo: state.player.songInfo,
    audioElRef: state.player.audioElRef,
    songIndex: state.player.songIndex,
    songList: state.player.songList
  }))

  useEffect(() => {
    const { play_url } = songInfo
    if (play_url === '') {
      const musicHash = new URLSearchParams(location.search).get('musicHash')
      if (musicHash) {
        ;(dispatch as any)(fetchMusicIfNeeded(musicHash, 0, [{ hash: musicHash }] as any))
      }
    }
    // todo remove deps?
  }, [location.search, songInfo])

  const playerProps = {
    musicStatus,
    songInfo,
    audioElRef,
    songIndex,
    songList,
    dispatch,
    location,
    navigate
  }

  const { nextSong, prevSong } = useNextPrevSong(songList, songIndex)

  return <PlayerMax {...playerProps} nextSong={nextSong} prevSong={prevSong} />
}

export default PlayerMaxContainer
