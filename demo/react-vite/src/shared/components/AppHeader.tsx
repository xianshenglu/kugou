import type { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.less'
import { root, search } from '../constants/router'

const AppHeader: FC = () => {
  const goBack = () => {
    window.history.go(-1)
  }

  return (
    <header className={styles.AppHeader}>
      <button className={styles.AppHeader__back} onClick={goBack} test-id="go-back-btn">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-arrow-left" />
        </svg>
      </button>
      <NavLink to={root} test-id="logo-link" className={styles.AppHeader__logo}>
        <span className={styles.AppHeader__logo_icon}>Kugou</span>
        <span>Music</span>
      </NavLink>
      <NavLink
        className={styles.AppHeader__searchBtn}
        to={search}
        test-id="search-btn"
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-search" />
        </svg>
      </NavLink>
    </header>
  )
}

export default AppHeader
