import {
  RECEIVE_SINGER_LIST,
  FETCH_SINGER_LIST
} from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
export const fetchSingerList = id => ({
  type: FETCH_SINGER_LIST,
  id
})
export const fetchSingerListIfNeeded = id => {
  return function(dispatch, getState) {
    if (getState().singerList.id === id) {
      return
    }
    dispatch(fetchSingerList(id))
    axios.get(api.singerList.replace(/singerListId?/i, id)).then(res => {
      dispatch(receiveSingerList(res, id))
    })
  }
}
export const receiveSingerList = (response, id) => ({
  type: RECEIVE_SINGER_LIST,
  response,
  id
})
