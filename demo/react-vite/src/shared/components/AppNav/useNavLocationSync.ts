import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useMemoizedFn } from 'ahooks'
import useAppNavStore from '../../stores/useAppNavStore'
import { navList } from './navList'

export function useNavLocationSync() {
  const location = useLocation()
  const { setActiveNavIndex, switchNav } = useAppNavStore()

  const onLocationChange = useMemoizedFn(({ pathname }: { pathname: string }) => {
    const activeIndex = navList.findIndex((nav) => nav.path === pathname)
    if (activeIndex >= 0) {
      switchNav(true)
      setActiveNavIndex(activeIndex)
    } else {
      switchNav(false)
    }
  })

  useEffect(() => {
    onLocationChange(location)
  }, [location, onLocationChange])
}

