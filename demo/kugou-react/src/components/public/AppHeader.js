import React, { Component } from 'react'
import logo__text from '../../assets/images/logo__text.png'
import { NavLink } from 'react-router-dom'
import './AppHeader.less'
class AppHeader extends Component {
  constructor(props) {
    super(props)
    this.goBack = this.goBack.bind(this)
  }
  goBack() {
    // if (this.curPlayerId === 1) {
    //   this.togglePlayers(1)
    //   return
    // }
    window.history.go(-1)
  }
  render() {
    return (
      <header className="header">
        <button className="header__back" onClick={this.goBack}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-arrow-left" />
          </svg>
        </button>
        <NavLink to="/">
          <img className="header__logo" src={logo__text} alt="logo" />
        </NavLink>
        <NavLink
          className="header__search_btn"
          to="/search/index"
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
