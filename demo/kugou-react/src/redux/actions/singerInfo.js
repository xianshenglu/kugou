import { RECEIVE_SINGER_INFO } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'

export const fetchSingerInfo = id => {
  return function(dispatch) {
    axios.get(api.singerInfo.replace(/singerId?/i, id)).then(res => {
      dispatch(receiveSingerInfo(res))
    })
  }
}
export const receiveSingerInfo = response => ({
  type: RECEIVE_SINGER_INFO,
  response
})
