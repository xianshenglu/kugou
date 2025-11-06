import { Suspense, type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import classNames from 'classnames'
import styles from './App.module.less'
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
} from './shared/constants/router'
import NewSongsContainer from './features/newSong/NewSongsPage'
import {
  PlayerMedContainer,
  RankListContainer,
  SongListContainer,
  SingerCategoriesContainer,
  RankInfoContainer,
  SongListInfoContainer,
  SingerListContainer,
  SingerInfoContainer,
  PlayerMaxContainer,
  SearchContainer
} from './features/lazyFeatures'
import { lazyWithPrefetch } from './shared/helpers/lazyWithPrefetch'
import { Loading } from './shared/components/Loading'
const AppHeader = lazyWithPrefetch(
  () => import('./shared/components/AppHeader')
)
const AppNavContainer = lazyWithPrefetch(
  () => import('./shared/components/AppNavContainer')
)
const App: FC<any> = (props) => {
  const { isPlayerMedShow, isAppNavShow } = props as any
  const mainClassName = classNames(styles.App__main, {
    [styles['App__main--underNav']]: isAppNavShow
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
              path={singerInfo + ':id'}
              element={<SingerInfoContainer />}
            />
            <Route path={search} element={
              <Suspense fallback={<Loading />}>
                <SearchContainer />
              </Suspense>
            } />
          </Routes>
        </ErrorBoundary>
      </main>
    </div>
  )
}

export default App
