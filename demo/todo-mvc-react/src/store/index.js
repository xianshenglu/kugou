import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import * as actionType from '../constants/ActionTypes'

import { combineReducers, createStore } from 'redux'
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
function todosHandler(state, { type, id, text, completed }) {
  const map = {
    [actionType.ADD_TODO]() {
      return state.concat({ id: Date.now(), text, completed: false })
    },
    [actionType.REMOVE_TODO]() {
      let targetTodoIndex = state.findIndex(todo => todo.id === id)
      if (targetTodoIndex < -1) {
        return state
      }
      let targetTodos = state.slice()
      targetTodos.splice(targetTodoIndex, 1)
      return targetTodos
    },
    [actionType.ALTER_TODO]() {
      let targetTodoIndex = state.findIndex(todo => todo.id === id)
      if (targetTodoIndex < -1) {
        return state
      }
      let targetTodos = state.slice()
      targetTodos[targetTodoIndex].text = text
      targetTodos[targetTodoIndex].completed = completed
    }
  }
  return typeof map[type] === 'function' ? map[type]() : state
}
function filterModeHandler(state, action) {
  return action.type === actionType.SET_FILTER_MODE ? action.mode : state
}
function todoApp(state, action) {
  return {
    todos: todosHandler(state.todos, action),
    filterMode: filterModeHandler(state.filterMode, action)
  }
}

const store = createStore(todoApp, initialState)
export default store
