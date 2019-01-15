import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
    const { data, render } = this.props
    return (
      <ul className="list" onScroll={() => $_xsl__loadImgLazy(this.lazyImages)}>
        {data.map(item => {
          const lazyImageRef = React.createRef()
          this.lazyImageRefs.push(lazyImageRef)
          return (
            <li className="list__item main_border_bottom" key={item.path}>
              <NavLink to={item.path} className="list__link">
                <img
                  className="list__img lazy_image"
                  ref={lazyImageRef}
                  src={logo__grey}
                  data-src={item.imgurl}
                  alt={item.title}
                />
                {render(item.title)}
                <button className="list__btn">
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
