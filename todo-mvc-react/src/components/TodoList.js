import React from 'react'
import './TodoList.css'
export default function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          {/* <span>{todo.id}</span> */}
          <input type="checkbox" checked={todo.completed} onChange={() => ''} />
          <span>{todo.text}</span>
          <button onClick={() => props.removeTodo(todo.id)}>X</button>
        </li>
      ))}
    </ul>
  )
}
