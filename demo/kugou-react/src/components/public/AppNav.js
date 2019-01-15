import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './AppNav.less'
import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../../constants/router'

const navs = [
  {
    text: '新歌',
    name: 'new',
    path: newSongs
  },
  {
    text: '排行',
    name: 'rank',
    path: rankList
  },
  {
    text: '歌单',
    name: 'song',
    path: songList
  },
  {
    text: '歌手',
    name: 'singer',
    path: singerCategories
  }
]
class AppNav extends Component {
  constructor(props) {
    super(props)
    const { pathname } = this.props
    this.state = {
      activeIndex: navs.findIndex(nav => nav.path === pathname)
    }
  }
  render() {
    return (
      <section className="nav">
        <nav className="nav__box">
          {navs.map((nav, index) => (
            <NavLink
              className="nav__link"
              key={nav.path}
              to={nav.path}
              activeClassName="nav__link--active"
              onClick={e => this.setState({ activeIndex: index })}
            >
              {nav.text}
            </NavLink>
          ))}
        </nav>
        <div
          className="nav__underline"
          style={{
            transform: `translateX(${this.state.activeIndex * 100}%)`
          }}
        />
      </section>
    )
  }
}
export default AppNav
