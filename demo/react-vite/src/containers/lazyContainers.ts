import { lazy } from 'react'

export const PlayerMedContainer = lazy(
  () => import(/* webpackPrefetch: true */ './player/PlayerMedContainer')
)
export const RankListContainer = lazy(
  () => import(/* webpackPrefetch: true */ './rank/RankListContainer')
)
export const SongListContainer = lazy(
  () => import(/* webpackPrefetch: true */ './song/SongListContainer')
)
export const SingerCategoriesContainer = lazy(
  () => import(/* webpackPrefetch: true */ './singer/SingerCategoriesContainer')
)
export const RankInfoContainer = lazy(
  () => import(/* webpackPrefetch: true */ './rank/RankInfoContainer')
)
export const SongListInfoContainer = lazy(
  () => import(/* webpackPrefetch: true */ './song/SongListInfoContainer')
)
export const SingerListContainer = lazy(
  () => import(/* webpackPrefetch: true */ './singer/SingerListContainer')
)
export const SingerInfoContainer = lazy(
  () => import(/* webpackPrefetch: true */ './singer/SingerInfoContainer')
)
export const SearchContainer = lazy(
  () => import(/* webpackPrefetch: true */ './search/searchContainer')
)
export const PlayerMaxContainer = lazy(
  () => import(/* webpackPrefetch: true */ './player/PlayerMaxContainer')
)
export const AppNavContainer = lazy(
  () => import(/* webpackPrefetch: true */ './public/AppNavContainer')
)
