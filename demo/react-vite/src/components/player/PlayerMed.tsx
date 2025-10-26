import type { FC } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import logo__theme from '../../assets/images/logo__theme.png'
import styles from './PlayerMed.module.less'
import { player } from '../../constants/router'
import PrevButton from './PrevButton'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import usePlayerStore from '../../stores/usePlayerStore'
import type { Song } from '@shared/domains/song/model'

interface PlayerMedProps {
  musicStatus: {
    isPlaying: boolean;
    isLoading: boolean;
  };
  songInfo: Song;
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
      <div className={styles.PlayerMed}>
        <NavLink
          to={{ pathname: player, search: '?musicHash=' + hash }}
          className={styles.PlayerMed__link}
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
