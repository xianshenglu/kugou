import { useState } from 'react'
import classNames from 'classnames'
import styles from './InfoDescription.module.less'

interface InfoDescriptionProps {
  description: string;
}

const InfoDescription = ({
  description
}: InfoDescriptionProps) => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <div
      className={classNames(styles.InfoDescription__intro, 'main_box_shadow', {
        [styles['InfoDescription__intro--more']]: showMore
      })}
    >
      <p className={styles.InfoDescription__text}>{description}</p>
      <button
        v-show="showMore"
        className={classNames(styles.InfoDescription__button, {
          hidden: !showMore
        })}
        onClick={toggleShowMore}
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-circle-arrow-up" />
        </svg>
      </button>
      <button
        className={classNames(styles.InfoDescription__button, {
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
