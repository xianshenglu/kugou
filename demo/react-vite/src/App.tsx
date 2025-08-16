import { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import classNames from 'classnames'
import './App.less'
import {
  // root,
  newSongs,
  rankList,
  songList,
  singerCategories,
  rankInfo,
  songListInfo,
  singerList,
  singerInfo,
  search,
  player
} from './constants/router'
import NewSongsContainer from './containers/newSong/NewSongsContainer'
import {
  PlayerMedContainer,
  RankListContainer,
  SongListContainer,
  SingerCategoriesContainer,
  RankInfoContainer,
  SongListInfoContainer,
  SingerListContainer,
  SingerInfoContainer,
  SearchContainer,
  PlayerMaxContainer,
  AppNavContainer
} from './containers/lazyContainers'
import { lazyWithPrefetch } from './assets/hoc/lazyWithPrefetch'
const AppHeader = lazyWithPrefetch(
  () => import('./components/public/AppHeader')
)
class App extends Component {
  render() {
    const { isPlayerMedShow, isAppNavShow } = this.props as any
    const mainClassName = classNames('App__main', {
      'App__main--underNav': isAppNavShow
    })
    return (
      <div className="App">
        <AppHeader />
        <AppNavContainer />
        {isPlayerMedShow ? <PlayerMedContainer /> : undefined}
        <main className={mainClassName}>
          <ErrorBoundary
            fallback={
              <div className="main_error_boundary">请回首页或联系管理员！</div>
            }
          >
            <Routes>
              <Route path={player} element={<PlayerMaxContainer />} />
              <Route path={newSongs} element={<NewSongsContainer />} />
              <Route path={rankList} element={<RankListContainer />} />
              <Route path={songList} element={<SongListContainer />} />
              <Route
                path={singerCategories}
                element={<SingerCategoriesContainer />}
              />
              <Route path={rankInfo + ':id'} element={<RankInfoContainer />} />
              <Route
                path={songListInfo + ':id'}
                element={<SongListInfoContainer />}
              />
              <Route
                path={singerList + ':id'}
                element={<SingerListContainer />}
              />
              <Route
                path={singerInfo + ':singerListId/:id'}
                element={<SingerInfoContainer />}
              />
              <Route path={search} element={<SearchContainer />} />
            </Routes>
          </ErrorBoundary>
        </main>
      </div>
    )
  }
}

export default App
