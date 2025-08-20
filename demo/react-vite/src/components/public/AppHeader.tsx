import React, { Component } from 'react'
import logo__text from '../../assets/images/logo__text.png'
import { NavLink } from 'react-router-dom'
import styles from './AppHeader.module.less'
import { root, search } from '../../constants/router'
class AppHeader extends Component<Record<string, unknown>> {
  constructor(props: Record<string, unknown>) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }
  goBack() {
    window.history.go(-1)
  }
  render() {
    return (
        <header className={styles.AppHeader}>
          <button className={styles.AppHeader__back} onClick={this.goBack}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </button>
        <NavLink to={root}>
            <img className={styles.AppHeader__logo} src={logo__text} alt="logo" />
        </NavLink>
        <NavLink
            className={styles.AppHeader__searchBtn}
          to={search}
          // @click.native="bus.$emit('searchBtnClicked')"
        >
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
        </NavLink>
      </header>
    )
  }
}
export default AppHeader
