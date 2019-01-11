import { connect } from 'react-redux'
import TodoInput from '../components/TodoInput'
import { addTodo } from '../redux/actions'
const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
})
const mapStateToProps = (state, ownProps) => ({ ...ownProps })
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput)
