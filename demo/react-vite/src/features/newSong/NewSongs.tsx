import React, { lazy, Suspense } from 'react'
import AppMusicList from '../../shared/components/AppMusicList'
import './NewSongs.module.less'
const NewSongsSlider = lazy(() => import('./NewSongsSlider'))
import { Loading } from 'src/shared/components/Loading'
// eslint-disable-next-line css-modules/no-unused-class
import newSongsSliderStyles from './NewSongsSlider.module.less'
// todo move to @shared
interface NewSongBanner {
  id: number
  imgurl: string
  title: string
}
interface NewSongsProps {
  songs: { hash: string; filename: string }[]
  sliderData: NewSongBanner[]
}

function NewSongs({ songs, sliderData }: NewSongsProps) {
  return (
    <React.Fragment>
      {/* todo refactor this pattern */}
      <Suspense fallback={<div className={newSongsSliderStyles.newSongsSlider}><Loading /></div>}>
        <NewSongsSlider banners={sliderData} />
      </Suspense>
      <AppMusicList data={songs} test-id="page-new-song" />
    </React.Fragment>
  )
}
export default NewSongs
