import {
  RECEIVE_SONG_LIST_INFO,
  FETCH_SONG_LIST_INFO
} from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
export const fetchSongListInfo = id => ({
  type: FETCH_SONG_LIST_INFO,
  id
})
export const fetchSongListInfoIfNeeded = id => {
  return function(dispatch, getState) {
    if (getState().songListInfo.id === id) {
      return
    }
    dispatch(fetchSongListInfo(id))
    axios.get(api.songListInfo.replace(/songListInfoId?/i, id)).then(res => {
      dispatch(receiveSongListInfo(res, id))
    })
  }
}
export const receiveSongListInfo = (response, id) => ({
  type: RECEIVE_SONG_LIST_INFO,
  response,
  id
})
