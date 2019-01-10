import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import { setFilterMode } from '../actions/index'
import './TodoFilter.css'
import store from '../reducers'
const classNames = require('classnames')
class TodoFilter extends React.Component {
  constructor(props) {
    super(props)
    this.setFilterMode = this.setFilterMode.bind(this)
  }
  setFilterMode(mode) {
    store.dispatch(setFilterMode(mode))
  }
  render() {
    let mode = this.props.mode
    return (
      <div className="TodoFilter">
        <a
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_ALL
          })}
          onClick={() => this.setFilterMode(SHOW_ALL)}
        >
          all
        </a>
        <a
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_ACTIVE
          })}
          onClick={() => this.setFilterMode(SHOW_ACTIVE)}
        >
          active
        </a>
        <a
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_COMPLETED
          })}
          onClick={() => this.setFilterMode(SHOW_COMPLETED)}
        >
          completed
        </a>
      </div>
    )
  }
}
export default TodoFilter
