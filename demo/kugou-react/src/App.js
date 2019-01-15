import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import classNames from 'classnames'
import './App.less'
import NewSongContainer from './containers/newSong/NewSongContainer'
import RankListContainer from './containers/rank/RankListContainer'
import AppHeader from './components/public/AppHeader'
import AppNav from './components/public/AppNav'

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      location: { pathname }
    } = this.props
    const isAppNavShow = pathname.match(/(\/|\/rank\/list)/)
    let mainClassName = classNames('App__main', {
      'App__main--hasNav': isAppNavShow
    })
    return (
      <div className="App">
        <AppHeader />
        <main className={mainClassName}>
          {isAppNavShow ? <AppNav pathname={pathname} /> : undefined}
          <Route path="/" exact component={NewSongContainer} />
          <Route path="/rank/list" exact component={RankListContainer} />
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
