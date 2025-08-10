import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.less'

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
      <section className="AppNav">
        <nav className="AppNav__box">
          {navList.map((nav, index) => (
            <NavLink
              key={nav.path}
              to={nav.path}
              className={({ isActive, isPending }) =>
                'AppNav__link' + (isActive ? ' AppNav__link--active' : '')
              }
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>
        <div
          className="AppNav__underline"
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        />
      </section>
    )
  }
}
export default AppNav
