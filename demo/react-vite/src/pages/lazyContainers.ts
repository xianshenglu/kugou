import { lazy } from 'react'
import { lazyWithPrefetch } from 'src/helpers/lazyWithPrefetch'

export const PlayerMedContainer = lazyWithPrefetch(
  () => import('./player/PlayerMedContainer')
)
export const RankListContainer = lazyWithPrefetch(
  () => import('./rank/RankListContainer')
)
export const SongListContainer = lazyWithPrefetch(
  () => import('./song/SongListContainer')
)
export const SingerCategoriesContainer = lazyWithPrefetch(
  () => import('./singer/SingerCategoriesContainer')
)
export const RankInfoContainer = lazyWithPrefetch(
  () => import('./rank/RankInfoContainer')
)
export const SongListInfoContainer = lazyWithPrefetch(
  () => import('./song/SongListInfoContainer')
)
export const SingerListContainer = lazyWithPrefetch(
  () => import('./singer/SingerListContainer')
)
export const SingerInfoContainer = lazyWithPrefetch(
  () => import('./singer/SingerInfoContainer')
)
export const SearchContainer = lazy(() => import('./search/searchContainer'))
export const PlayerMaxContainer = lazyWithPrefetch(
  () => import('./player/PlayerMaxContainer')
)
