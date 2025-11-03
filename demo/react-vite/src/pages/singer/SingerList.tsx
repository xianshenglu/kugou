import type { FC } from 'react'
import { Fragment, useEffect, useRef } from 'react'
import styles from './SingerList.module.less'
import { NavLink } from 'react-router-dom'
import logo__grey from '../../assets/images/logo__grey.png'
import classNames from 'classnames'
import { $_xsl__loadImgLazy } from '../../helpers/utils'
import type { SingerCategoryInfo, SingerSummary } from '@shared/domains/singer/model'
interface SingerListProps {
  singersData: {
    data: SingerSummary[];
    info: SingerCategoryInfo;
  };
}

const SingerList: FC<SingerListProps> = ({ singersData }) => {
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
    singersData: { data: singers, info: { name } },
  } = { singersData }

  return (
    <Fragment>
      <h4 className="module_title main_box_shadow">{name}</h4>
      <ul
        className={styles.SingerList__list}
        onScroll={() => $_xsl__loadImgLazy(lazyImagesRef.current)}
      >
        {singers.map((singer) => (
          <li
            className={classNames(styles.SingerList__item, 'main_border_bottom')}
            key={singer.id}
          >
            <NavLink to={singer.path} className={styles.SingerList__link}>
              <img
                className={classNames(styles.SingerList__img, 'lazyImage')}
                src={logo__grey}
                data-src={singer.imgUrl}
                alt={singer.name}
              />
              <div>{singer.name}</div>
            </NavLink>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

export default SingerList
