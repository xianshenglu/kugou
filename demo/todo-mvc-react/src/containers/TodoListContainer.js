import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { removeTodo, toggleTodo } from '../redux/actions'
import { filterTodos } from '../redux/selectors'

const mapStateToProps = state => ({
  todos: filterTodos(state)
})
const mapDispatchToProps = { removeTodo, toggleTodo }
// equal code below, would be more convenient when meeting lots of actionCreators
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ removeTodo,toggleTodo }, dispatch)
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: bindActionCreators(removeTodo,dispatch),
//   toggleTodo: bindActionCreators(toggleTodo,dispatch)
// })
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: id => dispatch(removeTodo(id)),
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
