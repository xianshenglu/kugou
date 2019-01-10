import React from 'react'
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from '../constants/FilterMode'
import './TodoFilter.css'
const classNames = require('classnames')
function TodoFilter(props) {
  return (
    <div className="TodoFilter">
      <span
        className={classNames('TodoFilter__mode', {
          'TodoFilter__mode--selected': props.mode === SHOW_ALL
        })}
        onClick={() => props.setFilterMode(SHOW_ALL)}
      >
        all
      </span>
      <span
        className={classNames('TodoFilter__mode', {
          'TodoFilter__mode--selected': props.mode === SHOW_ACTIVE
        })}
        onClick={() => props.setFilterMode(SHOW_ACTIVE)}
      >
        active
      </span>
      <span
        className={classNames('TodoFilter__mode', {
          'TodoFilter__mode--selected': props.mode === SHOW_COMPLETED
        })}
        onClick={() => props.setFilterMode(SHOW_COMPLETED)}
      >
        completed
      </span>
    </div>
  )
}

export default TodoFilter
