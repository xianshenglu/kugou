import React from 'react'
export default function TodoList(props) {
  return (
    <ul>
      {props.data.map(todo => (
        <li>
          <span>{todo.id}</span>
          <span>{todo.text}</span>
          <span>{todo.completed}</span>
        </li>
      ))}
    </ul>
  )
}
