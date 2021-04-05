import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import AppNav from '../../components/public/AppNav'
import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../../constants/router'
import { setActiveNavIndex, switchNav } from '../../redux/actions/appNav'
const navList = [
  {
    text: '新歌',
    path: newSongs
  },
  {
    text: '排行',
    path: rankList
  },
  {
    text: '歌单',
    path: songList
  },
  {
    text: '歌手',
    path: singerCategories
  }
]
class AppNavContainer extends Component {
  constructor(props) {
    super(props)
    this.historyListener = this.historyListener.bind(this)
    this.toggleBetweenPages = this.toggleBetweenPages.bind(this)
  }
  componentDidMount() {
    const {
      history,
      history: { location }
    } = this.props
    this.unlistenHistory = history.listen(this.historyListener)
    this.historyListener(location)
    window.addEventListener('touchstart', this.toggleBetweenPages)
  }
  componentWillUnmount() {
    this.unlistenHistory()
    window.removeEventListener('touchstart', this.toggleBetweenPages)
  }
  historyListener({ pathname }) {
    const activeIndex = navList.findIndex(nav => nav.path === pathname)
    const { dispatch } = this.props
    if (activeIndex >= 0) {
      dispatch(switchNav(true))
      dispatch(setActiveNavIndex(activeIndex))
    } else {
      dispatch(switchNav(false))
    }
  }
  toggleBetweenPages(event) {
    let interval = 300
    let startTime = Date.now()
    let minOffset = window.innerWidth * 0.1
    let maxOffset = window.innerWidth * 0.4
    let startClientX = event.touches[0].clientX
    let startClientY = event.touches[0].clientY

    const detectToSwipe = event => {
      window.removeEventListener('touchend', detectToSwipe, true)

      let endClientX = event.changedTouches[0].clientX
      let endClientY = event.changedTouches[0].clientY
      let offsetX = Math.abs(endClientX - startClientX)
      let offsetY = Math.abs(endClientY - startClientY)
      if (offsetY > offsetX) {
        return
      }
      let direction = endClientX - startClientX < 0
      let endTime = Date.now()
      let isSlow = endTime - startTime > interval
      let isSlowMoveEnough = isSlow && offsetX > maxOffset
      let isFastMoveEnough = !isSlow && offsetX > minOffset
      const {
        appNav: { activeIndex, isShow: isAppNavShow },
        history
      } = this.props
      if (isAppNavShow && (isSlowMoveEnough || isFastMoveEnough)) {
        let nextRouteIndex = direction ? activeIndex + 1 : activeIndex - 1
        let nextRoute = navList[nextRouteIndex]
        if (nextRoute !== undefined) {
          history.push(nextRoute.path)
        }
      }
    }
    window.addEventListener('touchend', detectToSwipe, true)
  }
  render() {
    const {
      appNav: { activeIndex, isShow }
    } = this.props
    return isShow ? <AppNav activeIndex={activeIndex} navList={navList} /> : ''
  }
}

const mapStateToProps = ({ appNav }) => ({
  appNav
})
const mapDispatchToProps = null

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppNavContainer)
)
