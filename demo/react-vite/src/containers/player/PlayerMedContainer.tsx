import type { FC } from 'react'
import PlayerMed from '../../components/player/PlayerMed'
import usePlayerStore from '../../stores/usePlayerStore'
import { useLocation } from 'react-router-dom'
import { useNextPrevSong } from 'src/hooks/useNextPrevSong'

const PlayerMedContainer: FC = () => {
  const location = useLocation()
  
  const { musicStatus, songInfo, audioElRef, songIndex, songList } = usePlayerStore()

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
