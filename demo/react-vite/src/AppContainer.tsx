import { useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useAppNavStore from './stores/useAppNavStore'
// import classNames from 'classnames'
import logo__theme from './assets/images/logo__theme.png'
import { player } from './constants/router'
import App from './App'
import {
  hideMusicLoading,
  playMusic,
  pauseMusic,
  switchPlayerMed
} from './redux/actions/player'
import { useMount, useUpdateEffect, useUnmount, useMemoizedFn } from 'ahooks'

function AppContainer() {
  const dispatch = useDispatch()
  const playerState = useSelector((state: any) => state.player)
  const isAppNavShow = useAppNavStore((s) => s.isShow)
  const location = useLocation()

  const setCssCustomVar = useMemoizedFn(() => {
    document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px')
  })

  const setBackupImg = useMemoizedFn((event: any) => {
    const target = event.target
    if (target.tagName && target.tagName.toLowerCase() === 'img') {
      target.src = logo__theme
    }
  })

  const onLocationChange = useMemoizedFn(({ pathname }: any) => {
    const play_url = playerState.songInfo.play_url
    const isPlayerMedShow = playerState.isPlayerMedShow
    const targetStatus = pathname !== player && play_url !== ''
    if (isPlayerMedShow !== targetStatus) {
      dispatch(switchPlayerMed(targetStatus))
    }
  })

  const canPlayCb = useMemoizedFn((e: any) => {
    // ! play may return a reject error when user haven't interact with page
    dispatch(hideMusicLoading())
    e.target
      .play()
      .then(() => dispatch(playMusic()))
      .catch(() => dispatch(pauseMusic()))
  })

  useMount(() => {
    onLocationChange(location)
    setCssCustomVar()
    window.addEventListener('error', setBackupImg, true)
  })

  useUpdateEffect(() => {
    onLocationChange(location)
  }, [location])

  useUnmount(() => {
    window.removeEventListener('error', setBackupImg, true)
  })

  const { audioElRef, songInfo: { play_url }, isPlayerMedShow } = playerState
  const appProps = { isPlayerMedShow, isAppNavShow }

  return (
    <Fragment>
      <audio
        src={play_url || null}
        className="hidden"
        ref={audioElRef}
        loop
        onCanPlay={canPlayCb}
      />
      <App {...appProps} />
    </Fragment>
  )
}

export default AppContainer
