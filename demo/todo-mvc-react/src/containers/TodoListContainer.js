import { connect } from 'react-redux'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import TodoList from '../components/TodoList'
import { removeTodo } from '../redux/actions'
function filterTodos(todos, filterMode) {
  const map = {
    [SHOW_ALL]: todos,
    [SHOW_ACTIVE]: todos.filter(todo => todo.completed === false),
    [SHOW_COMPLETED]: todos.filter(todo => todo.completed === true)
  }
  return map[filterMode]
}
const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state.todos, state.filterMode)
})
const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
