import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { removeTodo } from '../redux/actions'
import { filterTodos } from '../redux/selectors'

const mapStateToProps = state => ({
  todos: filterTodos(state)
})
const mapDispatchToProps = { removeTodo }
// equal code below, would be more convenient when meeting lots of actionCreators
// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ removeTodo }, dispatch)
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: bindActionCreators(removeTodo,dispatch)
// })
// or
// const mapDispatchToProps = dispatch => ({
//   removeTodo: id => dispatch(removeTodo(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
