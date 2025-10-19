import type { FC } from 'react'
import { Fragment, useEffect, useRef } from 'react'
import styles from './SingerList.module.less'
import { NavLink } from 'react-router-dom'
import logo__grey from '../../assets/images/logo__grey.png'
import classNames from 'classnames'
import { $_xsl__loadImgLazy } from '../../assets/js/utils'
import type { SingerSummary } from '@shared/domains/singer/model'
interface SingerListProps {
  singersData: {
    // page, pagesize was prepared for load more button
    page: number;
    pagesize: number;
    list: SingerSummary[];
    total: number;
  };
  listInfo: {
    // classid: PropTypes.number.isRequired,
    classname: string;
  };
}

const SingerList: FC<SingerListProps> = ({ singersData, listInfo }) => {
  const lazyImagesRef = useRef<HTMLImageElement[]>([])

  const initLazyImgLoad = () => {
    // todo optimized
    lazyImagesRef.current = Array.from(document.getElementsByClassName('lazyImage')) as HTMLImageElement[]
    $_xsl__loadImgLazy(lazyImagesRef.current)
  }

  useEffect(() => {
    initLazyImgLoad()
  })

  const {
    singersData: { list: singers },
    listInfo: { classname }
  } = { singersData, listInfo }

  return (
    <Fragment>
      <h4 className="module_title main_box_shadow">{classname}</h4>
      <ul
        className={styles.SingerList__list}
        onScroll={() => $_xsl__loadImgLazy(lazyImagesRef.current)}
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

export default SingerList
