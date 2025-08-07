import { SET_ACTIVE_NAV_INDEX, SWITCH_NAV } from '../../constants/actionType'

const initialState = {
  activeIndex: 0,
  isShow: false
}
const appNavHandler = (state = initialState, action) => {
  const map = {
    [SET_ACTIVE_NAV_INDEX]() {
      return Object.assign({}, state, {
        activeIndex: action.index
      })
    },
    [SWITCH_NAV]() {
      return Object.assign({}, state, {
        isShow: action.isShow
      })
    }
  }
  const handler = map[action.type]
  return typeof handler !== 'function' ? state : handler()
}
export default appNavHandler
