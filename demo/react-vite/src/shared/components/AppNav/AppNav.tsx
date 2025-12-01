import { memo, useRef, type FC } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import useAppNavStore from '../../stores/useAppNavStore'
import { useSwipe } from '../../hooks/useSwipe'
import { navList } from './navList'
import styles from './AppNav.module.less'
import { useOffsetToParent } from './useOffsetToParent'
const NAV_UNDERLINE_WIDTH = 100;

const AppNav: FC = memo((props) => {
  const navigate = useNavigate()
  const activeIndex = useAppNavStore((s) => s.activeIndex)
  
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const activeNavOffset = useOffsetToParent(() => navLinksRef.current[activeIndex], [activeIndex])

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
            ref={(el) => {
              navLinksRef.current[index] = el
            }}
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
          width: NAV_UNDERLINE_WIDTH + 'px',
          transform: `translateX(${activeNavOffset.left}px) scaleX(${activeNavOffset.width/NAV_UNDERLINE_WIDTH})`,
        }}
      />
    </section>
  )
})

export default AppNav
