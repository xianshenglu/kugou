import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import useAppNavStore from '../stores/useAppNavStore'
import { navList } from '../components/AppNav/navList'

export function useGlobalNavLocationSync() {
  const location = useLocation()
  const { setActiveNavIndex } = useAppNavStore()

  const onLocationChange = useMemoizedFn(
    ({ pathname }: { pathname: string }) => {
      const activeIndex = navList.findIndex((nav) => nav.path === pathname)
      if (activeIndex >= 0) {
        setActiveNavIndex(activeIndex)
      }
    }
  )

  useEffect(() => {
    onLocationChange(location)
  }, [location, onLocationChange])
}
