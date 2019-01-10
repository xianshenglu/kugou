import React from 'react'
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
        <button onClick={e => this.props.addTodo(this.inputRef.current.value)}>
          add todo
        </button>
      </form>
    )
  }
}
export default TodoInput
