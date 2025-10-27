import classNames from "classnames";
import styles from './Loading.module.less';

export function Loading() {
  return (
    <svg
      className={classNames('icon', styles.Loading)}
      aria-hidden="true"
      onClick={(e) => e.stopPropagation()}
    >
      <use xlinkHref="#icon-loading" />
    </svg>
  )
}
