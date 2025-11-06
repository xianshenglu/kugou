import type { FC } from 'react'
import { useEffect } from 'react'
import { useMemoizedFn, useEventListener } from 'ahooks'
import useAppNavStore from '../stores/useAppNavStore'
import AppNav from './AppNav'
import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../constants/router'
import { useLocation, useNavigate } from 'react-router-dom'
import { useShallow } from 'zustand/shallow'
const navList = [
  {
    text: '新歌',
    name: 'new',
    path: newSongs
  },
  {
    text: '排行',
    name: 'rank',
    path: rankList
  },
  {
    text: '歌单',
    name: 'song',
    path: songList
  },
  {
    text: '歌手',
    name: 'singer',
    path: singerCategories
  }
]

const AppNavContainer: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { activeIndex, isShow, setActiveNavIndex, switchNav } = useAppNavStore(useShallow((s) => ({
    activeIndex: s.activeIndex,
    isShow: s.isShow,
    setActiveNavIndex: s.setActiveNavIndex,
    switchNav: s.switchNav
  })))

  const onLocationChange = useMemoizedFn(({ pathname }: { pathname: string }) => {
    const activeIndex = navList.findIndex((nav) => nav.path === pathname)
    if (activeIndex >= 0) {
      switchNav(true)
      setActiveNavIndex(activeIndex)
    } else {
      switchNav(false)
    }
  })

  const toggleBetweenPages = useMemoizedFn((event: TouchEvent) => {
    const interval = 300
    const startTime = Date.now()
    const minOffset = window.innerWidth * 0.1
    const maxOffset = window.innerWidth * 0.4
    const startClientX = event.touches[0].clientX
    const startClientY = event.touches[0].clientY

    const detectToSwipe = (event: TouchEvent) => {
      window.removeEventListener('touchend', detectToSwipe, true)

      const endClientX = event.changedTouches[0].clientX
      const endClientY = event.changedTouches[0].clientY
      const offsetX = Math.abs(endClientX - startClientX)
      const offsetY = Math.abs(endClientY - startClientY)
      if (offsetY > offsetX) {
        return
      }
      const direction = endClientX - startClientX < 0
      const endTime = Date.now()
      const isSlow = endTime - startTime > interval
      const isSlowMoveEnough = isSlow && offsetX > maxOffset
      const isFastMoveEnough = !isSlow && offsetX > minOffset
      
      if (isShow && (isSlowMoveEnough || isFastMoveEnough)) {
        const nextRouteIndex = direction ? activeIndex + 1 : activeIndex - 1
        const nextRoute = navList[nextRouteIndex]
        if (nextRoute !== undefined) {
          navigate(nextRoute.path)
        }
      }
    }
    window.addEventListener('touchend', detectToSwipe, true)
  })

  useEffect(() => {
    onLocationChange(location)
  }, [location])

  useEventListener('touchstart', toggleBetweenPages, { target: window })

  return isShow ? <AppNav activeIndex={activeIndex} navList={navList} /> : null
}

export default AppNavContainer
