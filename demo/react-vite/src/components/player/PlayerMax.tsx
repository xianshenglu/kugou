import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import styles from './PlayerMax.module.less'
import PrevButton from './PrevButton'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import { togglePlay } from '../../redux/actions/player'
import PlayerLyricContainer from '../../containers/player/PlayerLyricContainer'
import PlayerProgressContainer from '../../containers/player/PlayerProgressContainer'

interface PlayerMaxProps {
  songInfo: {
    song_name: string;
    author_name: string;
    img: string;
  };
  musicStatus: {
    isPlaying: boolean;
    isLoading: boolean;
  };
  dispatch(...args: unknown[]): unknown;
  nextSong(...args: unknown[]): unknown;
  prevSong(...args: unknown[]): unknown;
}

class PlayerMax extends Component<PlayerMaxProps> {
  render() {
    // console.log(this.props)
    const {
      songInfo: { song_name, author_name, img: singerImg },
      musicStatus: { isPlaying, isLoading },
      dispatch,
      prevSong,
      nextSong
    } = this.props
    return (
      <Fragment>
        <div
          className={styles.PlayerMax__mask}
          style={{
            backgroundImage: `url(${singerImg}),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204))`
          }}
        />
        <div className={styles.PlayerMax__container}>
          <h6 className={styles.PlayerMax__songName}>{song_name}</h6>
          <img
            src={singerImg}
            className={classNames(styles.PlayerMax__singerImg, {
              [styles['PlayerMax__singerImg--active']]: isPlaying
            })}
            alt={author_name}
          />
          <PlayerLyricContainer />
          <PlayerProgressContainer />
          <div className={styles.PlayerMax__buttonContainer}>
            <PrevButton className={styles.PlayerMax__prevBtn} prev={prevSong} />
            <PlayButton
              className={styles.PlayerMax__playBtn}
              isLoading={isLoading}
              isPlaying={isPlaying}
              togglePlay={e => dispatch(togglePlay())}
            />
            <NextButton className={styles.PlayerMax__nextBtn} next={nextSong} />
          </div>
          <button className={styles.PlayerMax__download} />
        </div>
      </Fragment>
    )
  }
}
export default PlayerMax
