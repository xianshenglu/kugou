import React, { Component } from 'react'
import AppHeader from '../public/AppHeader'
import AppNav from '../public/AppNav'
import { getComponentDisplayName } from '../../assets/js/utils'
export function withAppHeader(WrappedComponent, data) {
  return class extends Component {
    static displayName = getComponentDisplayName(WrappedComponent)
    render() {
      return (
        <section className="">
          <AppHeader />
          <WrappedComponent {...data} {...this.props} />
        </section>
      )
    }
  }
}
export function withAppHeaderAndNav(WrappedComponent, data) {
  return class extends Component {
    static displayName = getComponentDisplayName(WrappedComponent)
    render() {
      return (
        <section className="">
          <AppHeader />
          <AppNav />
          <WrappedComponent {...data} {...this.props} />
        </section>
      )
    }
  }
}
