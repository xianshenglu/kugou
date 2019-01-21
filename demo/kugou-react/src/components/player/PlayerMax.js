import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './PlayerMax.less'
import PrevButton from './PrevButton'
import PlayButton from './PlayButton'
import NextButton from './NextButton'
import { togglePlay } from '../../redux/actions/player'
import PlayerLyricContainer from '../../containers/player/PlayerLyricContainer'
import PlayerProgressContainer from '../../containers/player/PlayerProgressContainer'

class PlayerMax extends Component {
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
          className="PlayerMax__mask"
          style={{
            backgroundImage: `url(${singerImg}),linear-gradient(to right, rgb(48, 67, 82), rgb(215, 210, 204))`
          }}
        />
        <div className="PlayerMax__container">
          <h6 className="PlayerMax__songName">{song_name}</h6>
          <img
            src={singerImg}
            className={classNames('PlayerMax__singerImg', {
              'PlayerMax__singerImg--active': isPlaying
            })}
            alt={author_name}
          />
          <PlayerLyricContainer />
          <PlayerProgressContainer />
          <div className="PlayerMax__buttonContainer">
            <PrevButton className="PlayerMax__prevBtn" prev={prevSong} />
            <PlayButton
              className="PlayerMax__playBtn"
              isLoading={isLoading}
              isPlaying={isPlaying}
              togglePlay={e => dispatch(togglePlay())}
            />
            <NextButton className="PlayerMax__nextBtn" next={nextSong} />
          </div>
          <button className="PlayerMax__download" />
        </div>
      </Fragment>
    )
  }
}
PlayerMax.propTypes = {
  songInfo: PropTypes.shape({
    song_name: PropTypes.string.isRequired,
    author_name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  musicStatus: PropTypes.shape({
    isPlaying: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
  nextSong: PropTypes.func.isRequired,
  prevSong: PropTypes.func.isRequired
}
export default PlayerMax
