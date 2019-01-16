import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './InfoDescription.less'
class InfoDescription extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMore: false
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }
  toggleShowMore() {
    this.setState(({ showMore }) => ({ showMore: !showMore }))
  }
  render() {
    const { showMore } = this.state
    const { description } = this.props
    return (
      <div
        className={classNames('InfoDescription__intro main_box_shadow', {
          'InfoDescription__intro--more': showMore
        })}
      >
        <p className="InfoDescription__text">{description}</p>
        <button
          v-show="showMore"
          className={classNames('InfoDescription__button', {
            hidden: !showMore
          })}
          onClick={this.toggleShowMore}
        >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-circle-arrow-up" />
          </svg>
        </button>
        <button
          className={classNames('InfoDescription__button', {
            hidden: showMore
          })}
          onClick={this.toggleShowMore}
        >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-circle-arrow-down" />
          </svg>
        </button>
      </div>
    )
  }
}
InfoDescription.propTypes = {
  description: PropTypes.string.isRequired
}
export default InfoDescription
