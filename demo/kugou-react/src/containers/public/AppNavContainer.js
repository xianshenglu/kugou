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
  }
  componentDidMount() {
    const {
      history,
      history: { location }
    } = this.props
    this.unlistenHistory = history.listen(this.historyListener)
    this.historyListener(location)
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
