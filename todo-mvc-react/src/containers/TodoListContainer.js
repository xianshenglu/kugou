import React, { Component } from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import TodoList from '../components/TodoList'
function filterTodos(todos, filterMode) {
  const map = {
    [SHOW_ALL]: todos,
    [SHOW_ACTIVE]: todos.filter(todo => todo.completed === false),
    [SHOW_COMPLETED]: todos.filter(todo => todo.completed === true)
  }
  return map[filterMode]
}
class TodoListContainer extends Component {
  render() {
    return (
      <TodoList todos={filterTodos(this.props.todos, this.props.filterMode)} />
    )
  }
}

export default TodoListContainer
