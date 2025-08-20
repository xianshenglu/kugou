import React, { Component, Fragment } from 'react'
import styles from './SingerList.module.less'
import { NavLink } from 'react-router-dom'
import logo__grey from '../../assets/images/logo__grey.png'
import classNames from 'classnames'
import { $_xsl__loadImgLazy } from '../../assets/js/utils'

interface SingerListProps {
  singersData: {
    // page, pagesize was prepared for load more button
    page: number;
    pagesize: number;
    list: {
      singerid: number;
      path: string;
      imgurl: string;
      singername: string;
    }[];
    total: number;
  };
  listInfo: {
    // classid: PropTypes.number.isRequired,
    classname: string;
  };
}

class SingerList extends Component<SingerListProps> {
  lazyImages: Array<Element> = []

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
      listInfo: { classname }
    } = this.props
    return (
      <Fragment>
        <h4 className="module_title main_box_shadow">{classname}</h4>
        <ul
          className={styles.SingerList__list}
          onScroll={() => $_xsl__loadImgLazy(this.lazyImages)}
        >
          {singers.map((singer) => (
            <li
              className={classNames(styles.SingerList__item, 'main_border_bottom')}
              key={singer.singerid}
            >
              <NavLink to={singer.path} className={styles.SingerList__link}>
                <img
                  className={classNames(styles.SingerList__img, 'lazyImage')}
                  src={logo__grey}
                  data-src={singer.imgurl}
                  alt={singer.singername}
                />
                <div className={styles.SingerList__name}>{singer.singername}</div>
              </NavLink>
            </li>
          ))}
        </ul>
      </Fragment>
    )
  }
}
export default SingerList
