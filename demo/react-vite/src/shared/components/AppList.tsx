import { useRef, useEffect } from 'react'
import type { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import classNames from 'classnames'
import logo__grey from '../assets/images/logo__grey.png'
import styles from './AppList.module.less'
import { $_xsl__loadImgLazy } from 'src/shared/helpers/utils'

interface AppListProps {
  data: {
    path: string;
    imgUrl: string;
    title: string;
  }[];
  render?(...args: unknown[]): unknown;
  className?: string;
  'test-id'?: string;
}

const AppList = ({
  data,
  render,
  className,
  'test-id': testId
}: AppListProps) => {
  const lazyImageRefs = useRef<Array<HTMLImageElement | null>>([])
  const initLazyImgLoad = () => {
    $_xsl__loadImgLazy(lazyImageRefs.current as any)
  }
  useEffect(() => {
    initLazyImgLoad()
  }, [data, render, className])

  useEffect(() => {
    initLazyImgLoad()
  }, [])

  const setLazyImageElement = (
    index: number,
    element: HTMLImageElement | null
  ) => {
    lazyImageRefs.current[index] = element
    return () => {
      lazyImageRefs.current.splice(index, 1)
    }
  }

  return (
    <ul
      className={classNames(styles.AppList, className)}
      onScroll={() => $_xsl__loadImgLazy(lazyImageRefs.current  as any)}
      test-id={testId}
    >
      {data.map((item, index) => {
        return (
          <li className={classNames(styles.AppList__item, 'main_border_bottom')} key={item.path} test-class="list">
            <NavLink to={item.path} className={styles.AppList__link} test-class="link">
              <img
                className={classNames(styles.AppList__img, 'lazyImage')}
                ref={(el) => setLazyImageElement(index, el)}
                src={logo__grey}
                data-src={item.imgUrl}
                alt={item.title}
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
