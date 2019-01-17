import {
  RECEIVE_SINGER_INFO,
  FETCH_SINGER_INFO
} from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'

export const fetchSingerInfo = id => ({
  type: FETCH_SINGER_INFO,
  id
})
export const fetchSingerInfoIfNeeded = id => {
  return function(dispatch, getState) {
    if (getState().singerInfo.id === Number(id)) {
      return
    }
    dispatch(fetchSingerInfo(id))
    axios.get(api.singerInfo.replace(/singerInfoId?/i, id)).then(res => {
      dispatch(receiveSingerInfo(res, id))
    })
  }
}

export const receiveSingerInfo = (response, id) => ({
  type: RECEIVE_SINGER_INFO,
  response,
  id
})
