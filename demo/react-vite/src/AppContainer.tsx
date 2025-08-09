import { useNavigate, useLocation, useParams } from 'react-router-dom'
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
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
    this.setCssCustomVar = this.setCssCustomVar.bind(this)
    this.canPlayCb = this.canPlayCb.bind(this)
    this.setBackupImg = this.setBackupImg.bind(this)
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onLocationChange(this.props.location)
    }
  }
  componentDidMount() {
    const { location } = this.props
    this.onLocationChange(location)
    this.setCssCustomVar()
    window.addEventListener('error', this.setBackupImg, true)
  }
  onLocationChange({ pathname }) {
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
          src={play_url || null}
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

function AppContainerWrapper(props) {
  const navigate = useNavigate()
  const location = useLocation()
  return <AppContainer {...props} location={location} />
}
export default connect(mapStateToProps, null)(AppContainerWrapper)
