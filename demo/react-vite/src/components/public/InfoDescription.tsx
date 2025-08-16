import { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './InfoDescription.less'
const InfoDescription = ({ description, title }) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

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
        onClick={toggleShowMore}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-circle-arrow-up" />
        </svg>
      </button>
      <button
        className={classNames('InfoDescription__button', {
          hidden: showMore
        })}
        onClick={toggleShowMore}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-circle-arrow-down" />
        </svg>
      </button>
    </div>
  )
}
InfoDescription.propTypes = {
  description: PropTypes.string.isRequired
}
export default InfoDescription
