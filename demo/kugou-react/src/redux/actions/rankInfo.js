import { FETCH_RANK_INFO, RECEIVE_RANK_INFO } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
export const fetchRankInfo = id => ({
  type: FETCH_RANK_INFO,
  id
})

export const fetchRankInfoIfNeeded = id => {
  return function(dispatch, getState) {
    if (getState().rankInfo.id === Number(id)) {
      return
    }
    dispatch(fetchRankInfo(id))
    axios.get(api.rankInfo + id).then(res => {
      dispatch(receiveRankInfo(res, id))
    })
  }
}
export const receiveRankInfo = (response, id) => ({
  type: RECEIVE_RANK_INFO,
  response,
  id
})
