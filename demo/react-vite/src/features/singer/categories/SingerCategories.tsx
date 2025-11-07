import type { FC } from 'react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SingerCategories.module.less'
import classNames from 'classnames'
import type { SingerCategoryData } from '@shared/domains/singer/model'

interface SingerCategoriesProps {
  singerCategories: SingerCategoryData[]
}

const SingerCategories: FC<SingerCategoriesProps> = ({ singerCategories }) => {
  return (
    <Fragment>
      {singerCategories.map((category, categoryIndex) => (
        <ul
          className={classNames(styles.singerCategories__list, 'main_border')}
          key={category.category}
          test-id={categoryIndex === 0 ? 'page-singer-category' : undefined}
        >
          {category.data.map(childCategory => (
            <li
              className={classNames(styles.singerCategories__item, 'main_border_bottom')}
              key={childCategory.path}
              test-class="list"
            >
              <NavLink
                to={childCategory.path}
                className={styles.singerCategories__link}
                test-class="link"
              >
                <div className={styles.singerCategories__title}>
                  {childCategory.classname}
                </div>
                <button className={styles.singerCategories_btn}>
                  <svg className="icon" aria-hidden="true">
                    <use xlinkHref="#icon-arrow-right" />
                  </svg>
                </button>
              </NavLink>
            </li>
          ))}
        </ul>
      ))}
    </Fragment>
  )
}

export default SingerCategories

