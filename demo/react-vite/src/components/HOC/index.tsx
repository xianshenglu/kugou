import React, { Component } from 'react'
import { getComponentDisplayName } from '../../assets/js/utils'
import { fetchMusicIfNeeded } from '../../redux/actions/player'
import { player } from '../../constants/router'
export function withNextPrevSong(WrappedComponent, data) {
  return class extends Component {
    static displayName = getComponentDisplayName(WrappedComponent)
    constructor(props) {
      super(props)
      this.prevSong = this.prevSong.bind(this)
      this.nextSong = this.nextSong.bind(this)
      this.dispatchAndRedirect = this.dispatchAndRedirect.bind(this)
    }
    nextSong() {
      const { songList, songIndex, dispatch } = this.props
      let targetSongIndex =
        songList[songIndex + 1] === undefined ? 0 : songIndex + 1
      this.dispatchAndRedirect(
        songList[targetSongIndex].hash,
        targetSongIndex,
        songList
      )
    }
    prevSong() {
      const { songList, songIndex, dispatch } = this.props
      let targetSongIndex =
        songList[songIndex - 1] === undefined
          ? songList.length - 1
          : songIndex - 1
      this.dispatchAndRedirect(
        songList[targetSongIndex].hash,
        targetSongIndex,
        songList
      )
    }
    dispatchAndRedirect(hash, songIndex, songList) {
      const {
        dispatch,
        navigate,
        location: { pathname }
      } = this.props
      dispatch(fetchMusicIfNeeded(hash, songIndex, songList))
      if (pathname === player) {
        navigate(pathname + '?musicHash=' + hash, { replace: true })
      }
    }
    render() {
      const { nextSong, prevSong } = this
      const props = { nextSong, prevSong }
      return <WrappedComponent {...data} {...this.props} {...props} />
    }
  }
}
