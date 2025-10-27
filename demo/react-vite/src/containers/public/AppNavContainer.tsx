import type { FC } from 'react'
import { useEffect } from 'react'
import { useMemoizedFn, useEventListener } from 'ahooks'
import { useDispatch, useSelector } from 'react-redux'
import AppNav from '../../components/public/AppNav'
import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../../constants/router'
import { setActiveNavIndex, switchNav } from '../../redux/actions/appNav'
import { useLocation, useNavigate } from 'react-router-dom'
const navList = [
  {
    text: '新歌',
    path: newSongs
  },
  {
    text: '排行',
    path: rankList
  },
  {
    text: '歌单',
    path: songList
  },
  {
    text: '歌手',
    path: singerCategories
  }
]

const AppNavContainer: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const { activeIndex, isShow } = useSelector((state: any) => ({
    activeIndex: state.appNav.activeIndex,
    isShow: state.appNav.isShow
  }))

  const onLocationChange = useMemoizedFn(({ pathname }: { pathname: string }) => {
    const activeIndex = navList.findIndex((nav) => nav.path === pathname)
    if (activeIndex >= 0) {
      dispatch(switchNav(true))
      dispatch(setActiveNavIndex(activeIndex))
    } else {
      dispatch(switchNav(false))
    }
  })

  const toggleBetweenPages = useMemoizedFn((event: TouchEvent) => {
    let interval = 300
    let startTime = Date.now()
    let minOffset = window.innerWidth * 0.1
    let maxOffset = window.innerWidth * 0.4
    let startClientX = event.touches[0].clientX
    let startClientY = event.touches[0].clientY

    const detectToSwipe = (event: TouchEvent) => {
      window.removeEventListener('touchend', detectToSwipe, true)

      let endClientX = event.changedTouches[0].clientX
      let endClientY = event.changedTouches[0].clientY
      let offsetX = Math.abs(endClientX - startClientX)
      let offsetY = Math.abs(endClientY - startClientY)
      if (offsetY > offsetX) {
        return
      }
      let direction = endClientX - startClientX < 0
      let endTime = Date.now()
      let isSlow = endTime - startTime > interval
      let isSlowMoveEnough = isSlow && offsetX > maxOffset
      let isFastMoveEnough = !isSlow && offsetX > minOffset
      
      if (isShow && (isSlowMoveEnough || isFastMoveEnough)) {
        let nextRouteIndex = direction ? activeIndex + 1 : activeIndex - 1
        let nextRoute = navList[nextRouteIndex]
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
