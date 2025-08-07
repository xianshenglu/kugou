import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
// import classNames from 'classnames'
import logo__theme from './assets/images/logo__theme.png'
import { player } from './constants/router'
import App from './App'
import {
  hideMusicLoading,
  playMusic,
  pauseMusic,
  switchPlayerMed
} from './redux/actions/player'

class AppContainer extends Component {
  constructor(props) {
    super(props)
    this.historyListener = this.historyListener.bind(this)
    this.setCssCustomVar = this.setCssCustomVar.bind(this)
    this.canPlayCb = this.canPlayCb.bind(this)
    this.setBackupImg = this.setBackupImg.bind(this)
  }
  componentDidMount() {
    const {
      history,
      history: { location }
    } = this.props
    this.unlistenHistory = history.listen(this.historyListener)
    this.historyListener(location)
    this.setCssCustomVar()
    window.addEventListener('error', this.setBackupImg, true)
  }
  historyListener({ pathname }) {
    const {
      player: {
        songInfo: { play_url },
        isPlayerMedShow
      },
      dispatch
    } = this.props
    const targetStatus = pathname !== player && play_url !== ''
    if (isPlayerMedShow !== targetStatus) {
      dispatch(switchPlayerMed(targetStatus))
    }
  }
  setCssCustomVar() {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight / 100 + 'px'
    )
  }
  setBackupImg(event) {
    let target = event.target
    if (target.tagName && target.tagName.toLowerCase() === 'img') {
      target.src = logo__theme
    }
  }
  componentWillUnmount() {
    this.unlistenHistory()
    window.removeEventListener('error', this.setBackupImg, true)
  }
  canPlayCb(e) {
    // ! play may return a reject error when user haven't interact with page
    const { dispatch } = this.props
    dispatch(hideMusicLoading())
    e.target
      .play()
      .then(() => dispatch(playMusic()))
      .catch(() => dispatch(pauseMusic()))
  }
  render() {
    const {
      player: {
        audioElRef,
        songInfo: { play_url },
        isPlayerMedShow
      },
      isAppNavShow
    } = this.props
    const props = { isPlayerMedShow, isAppNavShow }
    return (
      <Fragment>
        <audio
          src={play_url}
          className="hidden"
          ref={audioElRef}
          loop
          onCanPlay={this.canPlayCb}
        />
        <App {...props} />
      </Fragment>
    )
  }
}
const mapStateToProps = ({ player, appNav: { isShow: isAppNavShow } }) => ({
  player,
  isAppNavShow
})
export default withRouter(
  connect(
    mapStateToProps,
    null
  )(AppContainer)
)
// different with, think about it
// export default withRouter(
//   connect(
//     mapStateToProps,
//     null
//   )(AppContainer)
// )
