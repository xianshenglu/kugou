import * as actionType from '../../constants/ActionTypes'
import { SHOW_ALL } from '../../constants/FilterMode'

const initialMode = SHOW_ALL
export function filterModeHandler(state = initialMode, action) {
  return action.type === actionType.SET_FILTER_MODE ? action.mode : state
}
