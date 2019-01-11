import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { removeTodo, toggleTodoCompleted } from '../redux/actions'
import { getTodosByFilterMode } from '../redux/selectors'

const mapStateToProps = state => ({
  todos: getTodosByFilterMode(state)
})
const mapDispatchToProps = { removeTodo, toggleTodoCompleted }
// equal code below, would be more convenient when meeting lots of actionCreators
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ removeTodo,toggleTodoCompleted }, dispatch)
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: bindActionCreators(removeTodo,dispatch),
//   toggleTodoCompleted: bindActionCreators(toggleTodoCompleted,dispatch)
// })
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: id => dispatch(removeTodo(id)),
//   toggleTodoCompleted: id => dispatch(toggleTodoCompleted(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
