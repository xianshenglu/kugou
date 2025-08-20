import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './AppNav.module.less'

interface AppNavProps {
  navList: {
    path: string;
    text: string;
  }[];
  activeIndex: number;
}

class AppNav extends Component<AppNavProps> {
  render() {
    const { navList, activeIndex } = this.props
    return (
      <section className={styles.AppNav}>
        <nav className={styles.AppNav__box}>
          {navList.map((nav, index) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive, isPending }) =>
                styles.AppNav__link + (isActive ? ' ' + styles['AppNav__link--active'] : '')
              }
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>
        <div
          className={styles.AppNav__underline}
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        />
      </section>
    )
  }
}
export default AppNav
