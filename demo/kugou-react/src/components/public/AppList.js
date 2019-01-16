import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import logo__grey from '../../assets/images/logo__grey.png'
import './AppList.less'
import { $_xsl__loadImgLazy } from '../../assets/js/utils'
class AppList extends Component {
  componentDidMount() {
    this.initLazyImgLoad()
  }
  componentDidUpdate() {
    this.initLazyImgLoad()
  }
  initLazyImgLoad() {
    this.lazyImages = this.lazyImageRefs.map(ref => ref.current)
    $_xsl__loadImgLazy(this.lazyImages)
  }
  render() {
    this.lazyImageRefs = []
    const { data, render, className } = this.props
    return (
      <ul
        className={classNames('AppList', className)}
        onScroll={() => $_xsl__loadImgLazy(this.lazyImages)}
      >
        {data.map(item => {
          const lazyImageRef = React.createRef()
          this.lazyImageRefs.push(lazyImageRef)
          return (
            <li className="AppList__item main_border_bottom" key={item.path}>
              <NavLink to={item.path} className="AppList__link">
                <img
                  className="AppList__img lazy_image"
                  ref={lazyImageRef}
                  src={logo__grey}
                  data-src={item.imgurl}
                  alt={item.title}
                />
                {render(item)}
                <button className="AppList__btn">
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-right" />
                  </svg>
                </button>
              </NavLink>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default AppList
