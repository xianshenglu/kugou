import React, { Component } from 'react'
import PlayerMax from '../../components/player/PlayerMax'
import { connect } from 'react-redux'
import { fetchMusicIfNeeded } from '../../redux/actions/player'

class PlayerMaxContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      location,
      songInfo: { play_url }
    } = this.props
    if (play_url === '') {
      const musicHash = new URLSearchParams(location.search).get('musicHash')
      dispatch(fetchMusicIfNeeded(musicHash))
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
  player: { musicStatus, songInfo, audioElRef }
}) => ({
  musicStatus,
  songInfo,
  audioElRef
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerMaxContainer)
