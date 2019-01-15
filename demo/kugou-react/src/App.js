import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import './App.less'
import AppHeader from './components/public/AppHeader'
import AppNav from './components/public/AppNav'
import NewSongContainer from './containers/newSong/NewSongContainer'
import RankListContainer from './containers/rank/RankListContainer'
import SongListContainer from './containers/song/SongListContainer'
import { root, newSong, rankList, songList } from './constants/router'

class App extends Component {
  render() {
    const {
      location: { pathname }
    } = this.props
    const isAppNavShowReg = new RegExp(
      '^(' + root + '|' + newSong + '|' + rankList + '|' + songList + ')$'
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
          <Route path={newSong} exact component={NewSongContainer} />
          <Route path={rankList} exact component={RankListContainer} />
          <Route path={songList} exact component={SongListContainer} />
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
