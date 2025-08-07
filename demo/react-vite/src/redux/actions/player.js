import {
  FETCH_MUSIC,
  RECEIVE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  SHOW_MUSIC_LOADING,
  HIDE_MUSIC_LOADING,
  SWITCH_PLAYER_MED,
} from "../../constants/actionType";
import axios from 'axios'
import api from '../../constants/api'
export const fetchMusic = (id, songIndex, songList) => ({
  type: FETCH_MUSIC,
  id,
  songIndex,
  songList
})

export const fetchMusicIfNeeded = (id, songIndex = 0, songList) => {
  return function(dispatch, getState) {
    // if (getState().player.id === id) {
    //   return
    // }
    dispatch(fetchMusic(id, songIndex, songList))
    dispatch(showMusicLoading())
    axios.get(api.songInfoHasLyric + id).then(res => {
      dispatch(receiveMusic(res, id))
    })
  }
}
export const receiveMusic = (response, id) => ({
  type: RECEIVE_MUSIC,
  response,
  id
})

export const togglePlay = status => {
  return (dispatch, getState) => {
    const {
      player: {
        musicStatus,
        audioElRef: { current: audioEl }
      }
    } = getState()
    if (typeof status === 'undefined') {
      status = !musicStatus.isPlaying
    }
    if (status) {
      audioEl.play()
      dispatch(playMusic())
    } else {
      audioEl.pause()
      dispatch(pauseMusic())
    }
  }
}
export const playMusic = () => ({ type: PLAY_MUSIC })
export const pauseMusic = () => ({ type: PAUSE_MUSIC })
export const showMusicLoading = () => ({ type: SHOW_MUSIC_LOADING })
export const hideMusicLoading = () => ({ type: HIDE_MUSIC_LOADING })
export const switchPlayerMed = isShow => ({ type: SWITCH_PLAYER_MED, isShow })
