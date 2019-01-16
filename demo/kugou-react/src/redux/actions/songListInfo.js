import { RECEIVE_SONG_LIST_INFO } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'

export const fetchSongListInfo = id => {
  return function(dispatch) {
    axios.get(api.songListInfo.replace(/songListId?/i, id)).then(res => {
      dispatch(receiveSongListInfo(res))
    })
  }
}
export const receiveSongListInfo = response => ({
  type: RECEIVE_SONG_LIST_INFO,
  response
})
