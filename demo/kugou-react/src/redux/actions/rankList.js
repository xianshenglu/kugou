import { RECEIVE_RANK_LIST } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'
import { SUCCESS, PENDING } from '../../constants/status'
export const fetchRankListIfNeeded = () => {
  return function(dispatch, getState) {
    let status = getState().rankList.status
    if (status !== SUCCESS && status !== PENDING) {
      dispatch(fetchRankList())
    }
  }
}
export const fetchRankList = () => {
  return function(dispatch) {
    axios.get(api.rankList).then(res => {
      dispatch(receiveRankList(res))
    })
  }
}
export const receiveRankList = response => ({
  type: RECEIVE_RANK_LIST,
  response
})
