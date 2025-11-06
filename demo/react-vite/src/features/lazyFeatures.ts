import { lazy } from 'react'
import { lazyWithPrefetch } from 'src/shared/helpers/lazyWithPrefetch'

export const PlayerMedContainer = lazyWithPrefetch(
  () => import('./player/PlayerMedContainer')
)
export const PlayerMaxContainer = lazyWithPrefetch(
  () => import('./player/PlayerMaxPage')
)
export const RankListContainer = lazyWithPrefetch(
  () => import('./rank/list/RankListPage')
)
export const SongListContainer = lazyWithPrefetch(
  () => import('./song/list/SongListPage')
)
export const SingerCategoriesContainer = lazyWithPrefetch(
  () => import('./singer/categories/SingerCategoriesPage')
)
export const RankInfoContainer = lazyWithPrefetch(
  () => import('./rank/info/RankInfoPage')
)
export const SongListInfoContainer = lazyWithPrefetch(
  () => import('./song/info/SongListInfoPage')
)
export const SingerListContainer = lazyWithPrefetch(
  () => import('./singer/list/SingerListPage')
)
export const SingerInfoContainer = lazyWithPrefetch(
  () => import('./singer/info/SingerInfoPage')
)
export const SearchContainer = lazy(() => import('./search/SearchPage'))
