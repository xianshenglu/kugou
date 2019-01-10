import React from 'react'
import store from '../reducers'
import { addTodo } from '../actions'
class TodoInput extends React.Component {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  render() {
    return (
      <form onSubmit={e => e.preventDefault()}>
        <input
          type="text"
          name="todo_input"
          id="todo_input"
          ref={this.inputRef}
        />
        <button
          onClick={e => store.dispatch(addTodo(this.inputRef.current.value))}
        >
          add todo
        </button>
      </form>
    )
  }
}
export default TodoInput
