import * as actionType from '../../constants/ActionTypes'

export function todosHandler(state, { type, id, text, completed }) {
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
      return targetTodos
    },
    [actionType.TOGGLE_TODO_COMPLETED]() {
      let targetTodoIndex = state.findIndex(todo => todo.id === id)
      if (targetTodoIndex < -1) {
        return state
      }
      let targetTodos = state.slice()
      targetTodos[targetTodoIndex].completed = completed
      return targetTodos
    }
  }
  return typeof map[type] === 'function' ? map[type]() : state
}
export function filterModeHandler(state, action) {
  return action.type === actionType.SET_FILTER_MODE ? action.mode : state
}
