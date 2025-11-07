import { Fragment, Suspense, type FC } from 'react'
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
import { useGlobalNavLocationSync } from './shared/hooks/useGlobalNavLocationSync'
import { useGlobalPlayerMedVisibility } from './shared/hooks/useGlobalPlayerMedVisibility'
import { useGlobalCssCustomVar } from './shared/hooks/useGlobalCssCustomVar'
import { useGlobalImageErrorFallback } from './shared/hooks/useGlobalImageErrorFallback'
import { PlayerAudio } from './shared/player/PlayerAudio'
import useAppNavStore from './shared/stores/useAppNavStore'
import usePlayerStore from './shared/player/usePlayerStore'

const AppHeader = lazyWithPrefetch(
  () => import('./shared/components/AppHeader')
)
const AppNav = lazyWithPrefetch(
  () => import('./shared/components/AppNav/AppNav')
)

const App: FC = () => {
  const isPlayerMedShow = usePlayerStore((s) => s.isPlayerMedShow)
  const isAppNavShow = useAppNavStore((s) => s.isShow)

  useGlobalNavLocationSync()
  useGlobalPlayerMedVisibility()
  useGlobalCssCustomVar()
  useGlobalImageErrorFallback()

  const mainClassName = classNames(styles.App__main, {
    [styles['App__main--underNav']]: isAppNavShow
  })

  return (
    <Fragment>
      <PlayerAudio />
      <div className="App">
        <AppHeader />
        {isAppNavShow ? <AppNav /> : null}
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
    </Fragment>
  )
}

export default App
