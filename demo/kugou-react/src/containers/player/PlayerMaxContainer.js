import React, { Component } from 'react'
import PlayerMax from '../../components/player/PlayerMax'
import { connect } from 'react-redux'
import { fetchMusicIfNeeded } from '../../redux/actions/player'
import { withNextPrevSong } from '../../components/HOC'

class PlayerMaxContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      location,
      songInfo: { play_url }
    } = this.props
    if (play_url === '') {
      const musicHash = new URLSearchParams(location.search).get('musicHash')
      dispatch(fetchMusicIfNeeded(musicHash, 0, [{ hash: musicHash }]))
    }
  }
  render() {
    const {
      songInfo: { play_url },
      dispatch,
      audioElRef
    } = this.props
    const playerProps = {
      ...this.props
    }
    return <PlayerMax {...playerProps} />
  }
}

const mapStateToProps = ({
  player: { musicStatus, songInfo, audioElRef, songIndex, songList }
}) => ({
  musicStatus,
  songInfo,
  audioElRef,
  songIndex,
  songList
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNextPrevSong(PlayerMaxContainer))
