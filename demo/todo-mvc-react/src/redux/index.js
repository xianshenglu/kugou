import { SHOW_ALL } from '../constants/FilterMode'
import { createStore } from 'redux'
import { todosHandler, filterModeHandler } from './reducers'
const initialState = {
  todos: [
    {
      id: Date.now(),
      text: 'Consider using Redux',
      completed: true
    },
    {
      id: Date.now() + 1,
      text: 'Keep all state in a single tree',
      completed: false
    }
  ],
  filterMode: SHOW_ALL
}

function todoApp(state, action) {
  return {
    todos: todosHandler(state.todos, action),
    filterMode: filterModeHandler(state.filterMode, action)
  }
}

const store = createStore(todoApp, initialState)
export default store
