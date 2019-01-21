import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.less'
class AppNav extends Component {
  render() {
    const { navList, activeIndex } = this.props
    return (
      <section className="nav">
        <nav className="nav__box">
          {navList.map((nav, index) => (
            <NavLink
              className="nav__link"
              key={nav.path}
              to={nav.path}
              activeClassName="nav__link--active"
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>
        <div
          className="nav__underline"
          style={{
            transform: `translateX(${activeIndex * 100}%)`
          }}
        />
      </section>
    )
  }
}
export default AppNav
