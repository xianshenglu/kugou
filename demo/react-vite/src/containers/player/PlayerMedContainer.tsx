import type { FC } from 'react'
import PlayerMed from '../../components/player/PlayerMed'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useNextPrevSong } from 'src/hooks/useNextPrevSong'

const PlayerMedContainer: FC = () => {
  const location = useLocation()
  
  const { musicStatus, songInfo, audioElRef, songIndex, songList } = useSelector((state: any) => ({
    musicStatus: state.player.musicStatus,
    songInfo: state.player.songInfo,
    audioElRef: state.player.audioElRef,
    songIndex: state.player.songIndex,
    songList: state.player.songList
  }))

  const playerProps = {
    musicStatus,
    songInfo,
    audioElRef,
    songIndex,
    songList,
    location
  }

  const { nextSong, prevSong } = useNextPrevSong(songList, songIndex)

  return <PlayerMed {...playerProps} nextSong={nextSong} prevSong={prevSong} />
}

export default PlayerMedContainer
