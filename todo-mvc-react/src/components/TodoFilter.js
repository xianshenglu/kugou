import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import './TodoFilter.css'
const classNames = require('classnames')
class TodoFilter extends React.Component {
  render() {
    let mode = this.props.mode
    return (
      <div className="TodoFilter">
        <span
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_ALL
          })}
          onClick={() => this.props.setFilterMode(SHOW_ALL)}
        >
          all
        </span>
        <span
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_ACTIVE
          })}
          onClick={() => this.props.setFilterMode(SHOW_ACTIVE)}
        >
          active
        </span>
        <span
          className={classNames('TodoFilter__mode', {
            'TodoFilter__mode--selected': mode === SHOW_COMPLETED
          })}
          onClick={() => this.props.setFilterMode(SHOW_COMPLETED)}
        >
          completed
        </span>
      </div>
    )
  }
}
export default TodoFilter
