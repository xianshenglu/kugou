import { lazy, Suspense, type FC, type ReactNode } from 'react'
import SuspenseFallback from '../SuspenseFallback'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './AppNav.module.less'

const AppNav = lazy(() => import('./AppNav'))

const AppNavLazy: FC<{ fallback?: ReactNode }> = ({ fallback }) => {
  return (
    <Suspense
      fallback={
        <SuspenseFallback className={styles.AppNav}>
          {fallback}
        </SuspenseFallback>
      }
    >
      <AppNav />
    </Suspense>
  )
}

export default AppNavLazy

