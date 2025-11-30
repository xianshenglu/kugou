import { lazy, Suspense, type FC, type ReactNode } from 'react'
import SuspenseFallback from './SuspenseFallback'
// eslint-disable-next-line css-modules/no-unused-class
import styles from './AppHeader.module.less'

const AppHeader = lazy(() => import('./AppHeader'))

const AppHeaderLazy: FC<{ fallback?: ReactNode }> = ({ fallback }) => {
  return (
    <Suspense
      fallback={
        <SuspenseFallback className={styles.AppHeader}>
          {fallback}
        </SuspenseFallback>
      }
    >
      <AppHeader />
    </Suspense>
  )
}

export default AppHeaderLazy
