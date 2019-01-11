import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from '../../constants/FilterMode'
import { createSelector } from 'reselect'
const todos = state => state.todos
const filterMode = state => state.filterMode
export const getTodosByFilterMode = createSelector(
  [todos, filterMode],
  (todos, filterMode) => {
    const map = {
      [SHOW_ALL]: todos,
      [SHOW_ACTIVE]: todos.filter(todo => todo.completed === false),
      [SHOW_COMPLETED]: todos.filter(todo => todo.completed === true)
    }
    return map[filterMode]
  }
)
