import type { FC } from 'react'
import logo__text from '../assets/images/logo__text.png'
import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.less'
import { root, search } from '../constants/router'

const AppHeader: FC = () => {
  const goBack = () => {
    window.history.go(-1)
  }

  return (
    <header className={styles.AppHeader}>
      <button className={styles.AppHeader__back} aria-label="go back" onClick={goBack} test-id="go-back-btn">
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-arrow-left" />
        </svg>
      </button>
      <NavLink to={root} test-id="logo-link">
        <img className={styles.AppHeader__logo} src={logo__text} alt="logo" />
      </NavLink>
      <NavLink
        className={styles.AppHeader__searchBtn}
        to={search}
        test-id="search-btn"
        aria-label="search"
      >
        <svg className="icon" aria-hidden="true">
          <use xlinkHref="#icon-search" />
        </svg>
      </NavLink>
    </header>
  )
}

export default AppHeader
