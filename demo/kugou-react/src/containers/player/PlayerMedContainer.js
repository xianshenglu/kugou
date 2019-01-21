import React, { Component } from 'react'
import { withRouter, BrowserRouter as Route } from 'react-router-dom'
import PlayerMed from '../../components/player/PlayerMed'
import { connect } from 'react-redux'
import { withNextPrevSong } from '../../components/HOC'

class PlayerMedContainer extends Component {
  render() {
    const {
      location: { pathname },
      songInfo: { play_url },
      dispatch
    } = this.props
    const playerProps = {
      ...this.props
    }
    return <PlayerMed {...playerProps} />
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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(withNextPrevSong(PlayerMedContainer))
)
