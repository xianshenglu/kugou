import type { FC } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import useAppNavStore from '../../stores/useAppNavStore'
import { useSwipe } from '../../hooks/useSwipe'
import { navList } from './navList'
import styles from './AppNav.module.less'

const AppNav: FC = () => {
  const navigate = useNavigate()
  const activeIndex = useAppNavStore((s) => s.activeIndex)

  
  useSwipe({
    onSwipe: (direction) => {
      const nextRouteIndex = direction === 'left' ? activeIndex + 1 : activeIndex - 1
      const nextRoute = navList[nextRouteIndex]
      if (nextRoute !== undefined) {
        navigate(nextRoute.path)
      }
    }
  })

  return (
    <section className={styles.AppNav}>
      <nav className={styles.AppNav__box}>
        {navList.map((nav, index) => (
          <NavLink
            key={nav.path}
            to={nav.path}
            className={({ isActive, isPending }) =>
              styles.AppNav__link
            }
            test-id={`nav-link${nav.name}`}
          >
            {nav.text}
          </NavLink>
        ))}
      </nav>
      <div
        className={styles.AppNav__underline}
        style={{
          transform: `translateX(${activeIndex * 100}%)`
        }}
      />
    </section>
  )
}

export default AppNav
