import React from 'react'
import {
  FETCH_MUSIC,
  RECEIVE_MUSIC,
  PLAY_MUSIC,
  PAUSE_MUSIC,
  SHOW_MUSIC_LOADING,
  HIDE_MUSIC_LOADING,
  SWITCH_PLAYER_MED
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'
const initialState = {
  musicStatus: {
    isPlaying: false,
    isLoading: false
  },
  audioElRef: React.createRef(),
  isPlayerMedShow: false,
  songList: [],
  songIndex: 0,
  songInfo: {
    hash: '',
    author_name: '',
    song_name: '',
    img: '',
    lyric: '',
    play_url: '',
    timelength: 0
  }
}
const playerHandler = (state = initialState, action) => {
  const map = {
    [FETCH_MUSIC]() {
      return Object.assign({}, state, {
        status: PENDING,
        id: action.id,
        songIndex: action.songIndex,
        songList: action.songList
      })
    },
    [RECEIVE_MUSIC]() {
      // console.log(action.response.data)
      const {
        data: {
          author_name,
          song_name,
          img,
          lyrics,
          play_url,
          timelength,
          hash
        }
      } = action.response.data
      return Object.assign({}, state, {
        status: SUCCESS,
        id: action.id,
        songInfo: {
          hash,
          author_name,
          song_name,
          img,
          lyric: lyrics,
          play_url,
          timelength
        }
      })
    },
    [PLAY_MUSIC]() {
      return Object.assign({}, state, {
        musicStatus: {
          ...state.musicStatus,
          isPlaying: true
        }
      })
    },
    [PAUSE_MUSIC]() {
      return Object.assign({}, state, {
        musicStatus: {
          ...state.musicStatus,
          isPlaying: false
        }
      })
    },
    [SHOW_MUSIC_LOADING]() {
      return Object.assign({}, state, {
        musicStatus: {
          ...state.musicStatus,
          isLoading: true
        }
      })
    },
    [HIDE_MUSIC_LOADING]() {
      return Object.assign({}, state, {
        musicStatus: {
          ...state.musicStatus,
          isLoading: false
        }
      })
    },
    [SWITCH_PLAYER_MED]() {
      return Object.assign({}, state, {
        ...state,
        isPlayerMedShow: action.isShow
      })
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default playerHandler
