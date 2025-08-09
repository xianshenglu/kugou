import { SET_ACTIVE_NAV_INDEX, SWITCH_NAV } from '../../constants/actionType'

export const setActiveNavIndex = index => ({
  type: SET_ACTIVE_NAV_INDEX,
  index
})
export const switchNav = isShow => ({
  type: SWITCH_NAV,
  isShow
})
