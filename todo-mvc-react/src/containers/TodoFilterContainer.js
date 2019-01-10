import { connect } from 'react-redux'
import TodoFilter from '../components/TodoFilter'
import { setFilterMode } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  mode: state.filterMode
})
const mapDispatchToProps = dispatch => ({
  setFilterMode: mode => dispatch(setFilterMode(mode))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoFilter)
