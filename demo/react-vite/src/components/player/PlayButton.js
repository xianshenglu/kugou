import React, { Component } from 'react'
import classNames from 'classnames'
import './PlayButton.less'
import PropTypes from 'prop-types'
class PlayButton extends Component {
  render() {
    const { togglePlay, isLoading, isPlaying, className } = this.props
    return (
      <button className={className} onClick={togglePlay}>
        <svg
          className={classNames('icon', {
            hidden: isLoading || !isPlaying
          })}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-pause" />
        </svg>
        <svg
          className={classNames('icon', 'PlayButton__loading', {
            hidden: !isLoading
          })}
          aria-hidden="true"
          onClick={e => e.stopPropagation()}
        >
          <use xlinkHref="#icon-loading-white" />
        </svg>
        <svg
          className={classNames('icon', {
            hidden: isLoading || isPlaying
          })}
          aria-hidden="true"
        >
          <use xlinkHref="#icon-play" />
        </svg>
      </button>
    )
  }
}
PlayButton.propTypes = {
  togglePlay: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
  className: PropTypes.string
}
export default PlayButton
