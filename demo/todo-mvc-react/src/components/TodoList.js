import React from 'react'
import PropTypes from 'prop-types'
import './TodoList.css'
function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={e => props.toggleTodo(todo.id, !todo.completed)}
          />
          <span>{todo.text}</span>
          <button onClick={() => props.removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  removeTodo: PropTypes.func.isRequired
}
export default TodoList
