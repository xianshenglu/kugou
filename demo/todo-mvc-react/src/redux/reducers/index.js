import { combineReducers } from 'redux'
import { todosHandler } from './todos'
import { filterModeHandler } from './filterMode'
// function rootReducer(state = {}, action) {
//   return {
//     todos: todosHandler(state.todos, action),
//     filterMode: filterModeHandler(state.filterMode, action)
//   }
// }
const rootReducer = combineReducers({
  todos: todosHandler,
  filterMode: filterModeHandler
})

export default rootReducer
