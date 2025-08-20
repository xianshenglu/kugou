import React, { useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import logo__grey from '../../assets/images/logo__grey.png'
import styles from './AppList.module.less'
import { $_xsl__loadImgLazy } from '../../assets/js/utils'

interface AppListProps {
  data: {
    path: string;
    imgurl: string;
    name: string;
  }[];
  render?(...args: unknown[]): unknown;
  className?: string;
}

const AppList = ({
  data,
  render,
  className
}: AppListProps) => {
  const lazyImageRefs = useRef<Array<HTMLImageElement | null>>([])
  const lazyImages = useRef<Array<HTMLImageElement | null>>([])

  const initLazyImgLoad = () => {
    lazyImages.current = lazyImageRefs.current.map((el) => el)
    $_xsl__loadImgLazy(lazyImages.current)
  }
  useEffect(() => {
    lazyImageRefs.current = lazyImageRefs.current.slice(0, data.length)
    initLazyImgLoad()
  }, [data, render, className])

  useEffect(() => {
    initLazyImgLoad()
  }, [])

  return (
    <ul
      className={classNames(styles.AppList, className)}
      onScroll={() => $_xsl__loadImgLazy(lazyImages.current)}
    >
      {data.map((item, index) => {
        return (
          <li className={classNames(styles.AppList__item, 'main_border_bottom')} key={item.path}>
            <NavLink to={item.path} className={styles.AppList__link}>
              <img
                className={classNames(styles.AppList__img, 'lazyImage')}
                ref={(el) => {
                  lazyImageRefs.current[index] = el
                }}
                src={logo__grey}
                data-src={item.imgurl}
                alt={item.name}
              />
              {render ? (render(item) as ReactNode) : null}
              <button className={styles.AppList__btn}>
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

AppList.defaultProps = {
  render: () => undefined
}

export default AppList
