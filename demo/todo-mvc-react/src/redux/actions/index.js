import * as type from '../../constants/ActionTypes'
export const addTodo = text => ({ type: type.ADD_TODO, text })
export const removeTodo = id => ({ type: type.REMOVE_TODO, id })
export const alterTodo = (id, text) => ({ type: type.ADD_TODO, id, text })
export const toggleTodo = (id, completed) => ({
  type: type.TOGGLE_TODO,
  id,
  completed
})
export const setFilterMode = mode => ({ type: type.SET_FILTER_MODE, mode })
