import {
  FETCH_HOT_SEARCH,
  RECEIVE_HOT_SEARCH
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'

const initialState = {
  list: []
}
const hotSearchHandler = (state = initialState, action) => {
  const map = {
    [FETCH_HOT_SEARCH]() {
      return Object.assign({}, initialState, {
        status: PENDING,
        list: []
      })
    },
    [RECEIVE_HOT_SEARCH]() {
      // console.log(action.response.data)
      const {
        data: { info: list }
      } = action.response.data
      return Object.assign({}, initialState, {
        status: SUCCESS,
        list
      })
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default hotSearchHandler
