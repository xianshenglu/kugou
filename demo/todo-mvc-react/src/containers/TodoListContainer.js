import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { removeTodo } from '../redux/actions'
import { filterTodos } from '../redux/selectors'

const mapStateToProps = (state, ownProps) => ({
  todos: filterTodos(state),
  ...ownProps
})
const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeTodo(id))
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
