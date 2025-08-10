import React, { Component } from 'react'
import PropTypes from 'prop-types'
class PrevButton extends Component {
  render() {
    const { prev, className } = this.props
    return (
      <button className={className} onClick={prev}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-previous" />
        </svg>
      </button>
    )
  }
}
PrevButton.propTypes = {
  prev: PropTypes.func.isRequired,
  className: PropTypes.string
}
export default PrevButton
