import { RECEIVE_SONG_LIST } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
import { SUCCESS, PENDING } from '../../constants/status'
export const fetchSongListIfNeeded = () => {
  return function(dispatch, getState) {
    const status = getState().songList.status
    if (status !== SUCCESS && status !== PENDING) {
      dispatch(fetchSongList())
    }
  }
}
export const fetchSongList = () => {
  return function(dispatch) {
    axios.get(api.songList).then(res => {
      dispatch(receiveSongList(res))
    })
  }
}
export const receiveSongList = response => ({
  type: RECEIVE_SONG_LIST,
  response
})
