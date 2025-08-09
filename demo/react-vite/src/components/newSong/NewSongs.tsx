import React, { lazy } from 'react'
import PropTypes from 'prop-types'
import AppMusicList from '../public/AppMusicList'
const NewSongsSlider = lazy(() => import('./NewSongsSlider'))
import './NewSongs.less'
function NewSongs({ songs, sliderData }) {
  return (
    <React.Fragment>
      <NewSongsSlider banners={sliderData} />
      <AppMusicList data={songs} />
    </React.Fragment>
  )
}
NewSongs.propTypes = {
  songs: PropTypes.array.isRequired,
  sliderData: PropTypes.array.isRequired
}
export default NewSongs
