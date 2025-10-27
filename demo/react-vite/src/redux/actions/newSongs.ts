import { RECEIVE_NEW_SONGS } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
import { SUCCESS, PENDING } from '../../constants/status'
export const fetchNewSongsIfNeeded = () => {
  return function(dispatch, getState) {
    const status = getState().newSongs.status
    if (status !== SUCCESS && status !== PENDING) {
      dispatch(fetchNewSongs())
    }
  }
}
export const fetchNewSongs = () => {
  return function(dispatch) {
    axios.get(api.newSongs).then(res => {
      dispatch(receiveNewSongs(res))
    })
  }
}
export const receiveNewSongs = response => ({
  type: RECEIVE_NEW_SONGS,
  response
})
