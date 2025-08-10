import React, { Component } from 'react'
import PlayerMed from '../../components/player/PlayerMed'
import { connect } from 'react-redux'
import { withNextPrevSong } from '../../components/HOC'
import { useLocation, useNavigate } from 'react-router-dom'

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
const EnhancedPlayerMedContainer = withNextPrevSong(PlayerMedContainer)
function PlayerMedContainerWrapper(props) {
  const location = useLocation()
  const navigate = useNavigate()
  return (
    <EnhancedPlayerMedContainer
      {...props}
      location={location}
      navigate={navigate}
    />
  )
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerMedContainerWrapper)
