import React, { Component } from 'react'
import PlayerMed from '../../components/player/PlayerMed'
import { connect } from 'react-redux'
import { withNextPrevSong } from '../../components/HOC'
import { useLocation } from 'react-router-dom'

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
function PlayerMedContainerWrapper(props) {
  const location = useLocation()
  return <PlayerMedContainer {...props} location={location} />
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withNextPrevSong(PlayerMedContainerWrapper))
