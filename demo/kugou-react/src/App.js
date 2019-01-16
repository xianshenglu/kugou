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
  rankInfo
} from './constants/router'
import SingerCategoriesContainer from './containers/singer/SingerCategoriesContainer'
import RankInfoContainer from './containers/rank/RankInfoContainer'

class App extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props
    const isAppNavShowReg = new RegExp(
      '^(' +
        root +
        '|' +
        newSongs +
        '|' +
        rankList +
        '|' +
        songList +
        '|' +
        singerCategories +
        ')$'
    )
    const isAppNavShow = pathname.match(isAppNavShowReg)
    let mainClassName = classNames('App__main', {
      'App__main--underNav': isAppNavShow
    })
    return (
      <div className="App">
        <AppHeader />
        {isAppNavShow ? <AppNav pathname={pathname} /> : undefined}
        <main className={mainClassName}>
          <Route path={newSongs} exact component={NewSongsContainer} />
          <Route path={rankList} exact component={RankListContainer} />
          <Route path={songList} exact component={SongListContainer} />
          <Route
            path={singerCategories}
            exact
            component={SingerCategoriesContainer}
          />
          <Route path={rankInfo + ':id'} component={RankInfoContainer} />
        </main>
      </div>
    )
  }
  componentDidMount() {
    document.documentElement.style.setProperty(
      '--vh',
      window.innerHeight / 100 + 'px'
    )
  }
}

export default withRouter(App)
