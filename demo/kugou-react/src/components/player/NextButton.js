import React, { Component } from 'react'
import PropTypes from 'prop-types'
class NextButton extends Component {
  render() {
    const { next, className } = this.props
    return (
      <button className={className} onClick={next}>
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-next" />
        </svg>
      </button>
    )
  }
}
NextButton.propTypes = {
  next: PropTypes.func.isRequired,
  className: PropTypes.string
}
export default NextButton
