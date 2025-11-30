import type { FC } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import logo__theme from '../../shared/assets/images/logo__theme.png'
import styles from './PlayerMed.module.less'
import { player } from '../../shared/constants/router'
import PrevButton from './components/PrevButton'
import PlayButton from './components/PlayButton'
import NextButton from './components/NextButton'
import usePlayerStore from '../../shared/player/usePlayerStore'
// todo dedupe with @shared
type PlayerSongInfo = {
  hash: string
  author_name: string
  song_name: string
  img: string
}

interface PlayerMedProps {
  musicStatus: {
    isPlaying: boolean;
    isLoading: boolean;
  };
  songInfo: PlayerSongInfo;
  nextSong?: any;
  prevSong?: any;
}

const PlayerMed: FC<PlayerMedProps> = ({
  songInfo: { song_name, author_name, img: singerImg, hash },
  musicStatus: { isPlaying, isLoading },
  prevSong,
  nextSong
}) => {
  const { togglePlay } = usePlayerStore()

  return (
    <Fragment>
      <div className={styles.PlayerMed} test-id="player-med">
        <NavLink
          to={{ pathname: player, search: '?musicHash=' + hash }}
          className={styles.PlayerMed__link}
          test-id="player-med-link"
        >
          <img
            src={singerImg ? singerImg : logo__theme}
            alt={author_name}
            className={styles.PlayerMed__singerImg}
          />
          <div className={styles.PlayerMed__songInfo}>
            <div className={styles.PlayerMed__songName}>{song_name}</div>
            <div className={styles.PlayerMed__singerName}>{author_name}</div>
          </div>
        </NavLink>
        <div className={styles.PlayerMed__buttonContainer}>
          <PrevButton className={styles.PlayerMed__prevBtn} prev={prevSong} />
          <PlayButton
            className={styles.PlayerMed__playBtn}
            isLoading={isLoading}
            isPlaying={isPlaying}
            togglePlay={togglePlay}
          />
          <NextButton className={styles.PlayerMed__nextBtn} next={nextSong} />
        </div>
      </div>
    </Fragment>
  )
}

export default PlayerMed
