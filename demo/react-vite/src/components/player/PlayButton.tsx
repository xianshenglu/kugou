import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './PlayButton.module.less'

interface PlayButtonProps {
  togglePlay(...args: unknown[]): unknown;
  isLoading: boolean;
  isPlaying: boolean;
  className?: string;
}

class PlayButton extends Component<PlayButtonProps> {
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
          className={classNames('icon', styles.PlayButton__loading, {
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
export default PlayButton
