import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo__theme from '../../assets/images/logo__theme.png'
import './PlayerMed.less'
import { player } from '../../constants/router'
import PrevButton from './PrevButton'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import { togglePlay } from '../../redux/actions/player'

class PlayerMed extends Component {
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
PlayerMed.propTypes = {
  musicStatus: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  songInfo: PropTypes.shape({
    song_name: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired
}
export default PlayerMed
