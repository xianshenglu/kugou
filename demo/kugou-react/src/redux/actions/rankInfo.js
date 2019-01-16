import { RECEIVE_RANK_INFO } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'

export const fetchRankInfo = id => {
  return function(dispatch) {
    axios.get(api.rankInfo + id).then(res => {
      dispatch(receiveRankInfo(res))
    })
  }
}
export const receiveRankInfo = response => ({
  type: RECEIVE_RANK_INFO,
  response
})
