import React, { Component } from 'react'

interface NextButtonProps {
  next(...args: unknown[]): unknown;
  className?: string;
}

class NextButton extends Component<NextButtonProps> {
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
export default NextButton
