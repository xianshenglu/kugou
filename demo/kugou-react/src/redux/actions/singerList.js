import { RECEIVE_SINGER_LIST } from '../../constants/actionType'
import axios from 'axios'
import api from '../../constants/api'

export const fetchSingerList = id => {
  return function(dispatch) {
    axios.get(api.singerList.replace(/singerListId?/i, id)).then(res => {
      dispatch(receiveSingerList(res))
    })
  }
}
export const receiveSingerList = response => ({
  type: RECEIVE_SINGER_LIST,
  response
})
