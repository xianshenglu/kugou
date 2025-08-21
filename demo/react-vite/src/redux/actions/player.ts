import {
  FETCH_MUSIC,
  RECEIVE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  SHOW_MUSIC_LOADING,
  HIDE_MUSIC_LOADING,
  SWITCH_PLAYER_MED,
} from "../../constants/actionType";
import axios, { type AxiosResponse } from 'axios'
import api from '../../constants/api'
import type { Song, SongLyricResponse } from "@shared/domains/song/model";
import type { Dispatch } from "redux";
export const fetchMusic = (id: any, songIndex: number, songList: Song[]) => ({
  type: FETCH_MUSIC,
  id,
  songIndex,
  songList
})

export const fetchMusicIfNeeded = (id: string | null, songIndex = 0, songList: Song[]) => {
  return function(dispatch: Dispatch) {
    // if (getState().player.id === id) {
    //   return
    // }
    dispatch(fetchMusic(id, songIndex, songList))
    dispatch(showMusicLoading())
    axios.get<SongLyricResponse>(api.songInfoHasLyric + id).then(res => {
      dispatch(receiveMusic(res, id))
    })
  }
}
export const receiveMusic = (response: AxiosResponse<SongLyricResponse>, id: any) => ({
  type: RECEIVE_MUSIC,
  response,
  id
})

export const togglePlay = (status?: boolean | undefined) => {
  return (dispatch: Dispatch, getState: any) => {
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
export const switchPlayerMed = (isShow: boolean) => ({ type: SWITCH_PLAYER_MED, isShow })
