import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import logo__theme from '../../assets/images/logo__theme.png'
import './PlayerMed.less'
import { player } from '../../constants/router'
import PrevButton from './PrevButton'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import { togglePlay } from '../../redux/actions/player'

interface PlayerMedProps {
  musicStatus: {
    isPlaying: boolean;
    isLoading: boolean;
  };
  songInfo: {
    song_name: string;
    author_name: string;
    img: string;
  };
  dispatch(...args: unknown[]): unknown;
  nextSong(...args: unknown[]): unknown;
  prevSong(...args: unknown[]): unknown;
}

class PlayerMed extends Component<PlayerMedProps> {
  render() {
    const {
      songInfo: { song_name, author_name, img: singerImg, hash },
      musicStatus: { isPlaying, isLoading },
      dispatch,
      prevSong,
      nextSong
    } = this.props
    return (
      <Fragment>
        <div className="PlayerMed">
          <NavLink
            to={{ pathname: player, search: '?musicHash=' + hash }}
            className="PlayerMed__link"
          >
            <img
              src={singerImg ? singerImg : logo__theme}
              alt={author_name}
              className="PlayerMed__singerImg"
            />
            <div className="PlayerMed__songInfo">
              <div className="PlayerMed__songName">{song_name}</div>
              <div className="PlayerMed__singerName">{author_name}</div>
            </div>
          </NavLink>
          <div className="PlayerMed__buttonContainer">
            <PrevButton className="PlayerMed__prevBtn" prev={prevSong} />
            <PlayButton
              className="PlayerMed__playBtn"
              isLoading={isLoading}
              isPlaying={isPlaying}
              togglePlay={e => dispatch(togglePlay())}
            />
            <NextButton className="PlayerMed__nextBtn" next={nextSong} />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default PlayerMed
