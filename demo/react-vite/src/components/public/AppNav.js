import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import './AppNav.less'
class AppNav extends Component {
  render() {
    const { navList, activeIndex } = this.props
    return (
      <section className="AppNav">
        <nav className="AppNav__box">
          {navList.map((nav, index) => (
            <NavLink
              className="AppNav__link"
              key={nav.path}
              to={nav.path}
              activeClassName="AppNav__link--active"
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
AppNav.propTypes = {
  navList: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  activeIndex: PropTypes.number.isRequired
}
export default AppNav
