import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import logo__grey from '../../assets/images/logo__grey.png'
import './SingerList.less'
import { $_xsl__loadImgLazy } from '../../assets/js/utils'

class SingerList extends Component {
  componentDidMount() {
    this.initLazyImgLoad()
  }
  componentDidUpdate() {
    this.initLazyImgLoad()
  }
  initLazyImgLoad() {
    // todo optimized
    this.lazyImages = Array.from(document.getElementsByClassName('lazyImage'))
    $_xsl__loadImgLazy(this.lazyImages)
  }
  render() {
    const {
      singersData: { list: singers },
      listInfo: { classname, classid }
    } = this.props
    return (
      <Fragment>
        <h4 className="module_title main_box_shadow">{classname}</h4>
        <ul
          className="SingerList__list"
          onScroll={() => $_xsl__loadImgLazy(this.lazyImages)}
        >
          {singers.map(singer => {
            return (
              <li
                className="SingerList__item main_border_bottom"
                key={singer.singerid}
              >
                <NavLink to={singer.path} className="SingerList__link">
                  <img
                    className="SingerList__img lazyImage"
                    src={logo__grey}
                    data-src={singer.imgurl}
                    alt={singer.singername}
                  />
                  <div className="SingerList__name">{singer.singername}</div>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}
SingerList.propTypes = {
  singersData: PropTypes.shape({
    page: PropTypes.number.isRequired,
    pagesize: PropTypes.number.isRequired,
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired,
  listInfo: PropTypes.shape({
    classid: PropTypes.number.isRequired,
    classname: PropTypes.string.isRequired
  }).isRequired
}
export default SingerList
