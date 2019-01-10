import React from 'react'
import './TodoList.css'
import store from '../reducers'
import { removeTodo } from '../actions'
export default function TodoList(props) {
  return (
    <ul className="TodoList">
      {props.todos.map(todo => (
        <li key={todo.id} className="TodoList__item">
          {/* <span>{todo.id}</span> */}
          <input type="checkbox" checked={todo.completed} onChange={() => ''} />
          <span>{todo.text}</span>
          <button onClick={() => store.dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </ul>
  )
}
