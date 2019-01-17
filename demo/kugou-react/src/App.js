import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import './App.less'
import AppHeader from './components/public/AppHeader'
import AppNav from './components/public/AppNav'
import NewSongsContainer from './containers/newSong/NewSongsContainer'
import RankListContainer from './containers/rank/RankListContainer'
import SongListContainer from './containers/song/SongListContainer'
import {
  root,
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo
} from './constants/router'
import SingerCategoriesContainer from './containers/singer/SingerCategoriesContainer'
import RankInfoContainer from './containers/rank/RankInfoContainer'
import SongListInfoContainer from './containers/song/SongListInfoContainer'
import SingerListContainer from './containers/singer/SingerListContainer'
import SingerInfoContainer from './containers/singer/SingerInfoContainer'
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
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { navActiveIndex: -1 }
    this.historyListener = this.historyListener.bind(this)
    this.setCssCustomVar = this.setCssCustomVar.bind(this)
  }
  componentDidMount() {
    const {
      history,
      history: { location }
    } = this.props
    this.historyListener(location)
    this.unlistenHistory = history.listen(this.historyListener)
    this.setCssCustomVar()
  }
  historyListener({ pathname }) {
    const navActiveIndex = navList.findIndex(nav => nav.path === pathname)
    if (navActiveIndex >= 0) {
      this.setState({ navActiveIndex })
    }
  }
  setCssCustomVar() {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight / 100 + 'px'
    )
  }
  componentWillUnmount() {
    this.unlistenHistory()
  }
  render() {
    const {
      location: { pathname }
    } = this.props
    const { navActiveIndex } = this.state
    const isAppNavShow = navList.map(o => o.path).includes(pathname)
    let appNavResult
    let mainClassName = 'App__main'
    if (isAppNavShow) {
      appNavResult = (
        <AppNav navActiveIndex={navActiveIndex} navList={navList} />
      )
      mainClassName += 'App__main--underNav'
    }
    return (
      <div className="App">
        <AppHeader />
        {appNavResult}
        <main className={mainClassName}>
          <Route path={newSongs} exact component={NewSongsContainer} />
          <Route path={rankList} exact component={RankListContainer} />
          <Route path={songList} exact component={SongListContainer} />
          <Route
            path={singerCategories}
            exact
            component={SingerCategoriesContainer}
          />
          <Route path={rankInfo + ':id'} exact component={RankInfoContainer} />
          <Route
            path={songListInfo + ':id'}
            exact
            component={SongListInfoContainer}
          />
          <Route
            path={singerList + ':id'}
            exact
            component={SingerListContainer}
          />
          <Route
            path={singerInfo + ':id/:id'}
            exact
            component={SingerInfoContainer}
          />
        </main>
      </div>
    )
  }
}

export default withRouter(App)
