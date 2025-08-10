import { useState } from 'react'
import classNames from 'classnames'
import './InfoDescription.less'

interface InfoDescriptionProps {
  description: string;
}

const InfoDescription = ({
  description,
  title
}: InfoDescriptionProps) => {
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
export default InfoDescription
