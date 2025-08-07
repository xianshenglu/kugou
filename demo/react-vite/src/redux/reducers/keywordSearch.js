import {
  FETCH_KEYWORD_SEARCH,
  RECEIVE_KEYWORD_SEARCH
} from '../../constants/actionType'
import { PENDING, SUCCESS } from '../../constants/status'

const initialState = {
  list: [],
  total: 0
}
const keywordSearchHandler = (state = initialState, action) => {
  const map = {
    [FETCH_KEYWORD_SEARCH]() {
      return Object.assign({}, initialState, {
        status: PENDING,
        id: action.id,
        list: [],
        total: 0
      })
    },
    [RECEIVE_KEYWORD_SEARCH]() {
      // console.log(action.response.data)
      const {
        data: { info: list, total }
      } = action.response.data
      return Object.assign({}, initialState, {
        status: SUCCESS,
        list,
        total,
        id: action.id
      })
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default keywordSearchHandler
