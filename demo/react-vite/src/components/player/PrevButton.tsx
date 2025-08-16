import React, { Component } from 'react'

interface PrevButtonProps {
  prev(...args: unknown[]): unknown;
  className?: string;
}

class PrevButton extends Component<PrevButtonProps> {
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
export default PrevButton
