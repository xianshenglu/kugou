import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './AppNav.less'
const navs = [
  {
    text: '新歌',
    name: 'new',
    path: '/'
  },
  {
    text: '排行',
    name: 'rank',
    path: '/rank/list'
  },
  {
    text: '歌单',
    name: 'song',
    path: '/song/list'
  },
  {
    text: '歌手',
    name: 'singer',
    path: '/singer/category'
  }
]
class AppNav extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    //todo update activeIndex according to router
    this.state = {
      // activeIndex: navs.findIndex(nav => nav.path === this.$route.path)
    }
  }
  render() {
    return (
      <Router>
        <section className="nav">
          <nav className="nav__box">
            {navs.map(nav => (
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
            style={
              {
                // transform: `translateX(${this.state.activeIndex * 100}%)`
              }
            }
          />
        </section>
      </Router>
    )
  }
}
export default AppNav
