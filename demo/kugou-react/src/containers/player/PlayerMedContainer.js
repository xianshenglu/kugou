import React, { Component } from 'react'
import { withRouter, BrowserRouter as Route } from 'react-router-dom'
import PlayerMed from '../../components/player/PlayerMed'
import { connect } from 'react-redux'

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
)(withRouter(PlayerMedContainer))
