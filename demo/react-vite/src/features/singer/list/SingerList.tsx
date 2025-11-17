import type { FC } from 'react'
import { Fragment, useEffect, useRef } from 'react'
import styles from './SingerList.module.less'
import { NavLink } from 'react-router-dom'
import logo__grey from '../../../shared/assets/images/logo__grey.png'
import classNames from 'classnames'
import { $_xsl__loadImgLazy } from '../../../shared/helpers/utils'
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
        test-id="page-singer-list"
      >
        {singers.map((singer) => (
          <li
            className={classNames(styles.SingerList__item, 'main_border_bottom')}
            key={singer.id}
            test-class="list"
          >
            <NavLink to={singer.path} className={styles.SingerList__link} test-class="link">
              <img
                className={classNames(styles.SingerList__img, 'lazyImage')}
                src={logo__grey}
                data-src={singer.imgUrl}
                alt=""
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

