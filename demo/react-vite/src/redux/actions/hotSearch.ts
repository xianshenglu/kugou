import {
  FETCH_HOT_SEARCH,
  RECEIVE_HOT_SEARCH
} from '../../constants/actionType'
import { SUCCESS, PENDING } from '../../constants/status'
import axios from 'axios'
import api from '../../constants/api'

export const fetchHotSearch = id => ({
  type: FETCH_HOT_SEARCH,
  id
})
export const fetchHotSearchIfNeeded = id => {
  return function(dispatch, getState) {
    const { status } = getState().hotSearch
    if (status === PENDING || status === SUCCESS) {
      return
    }
    dispatch(fetchHotSearch())
    axios.get(api.hotSearch).then(res => {
      dispatch(receiveHotSearch(res))
    })
  }
}

export const receiveHotSearch = response => ({
  type: RECEIVE_HOT_SEARCH,
  response
})
