import { useLocation } from 'react-router-dom'
import { Fragment } from 'react'
import useAppNavStore from './stores/useAppNavStore'
import usePlayerStore from './stores/usePlayerStore'
import logo__theme from './assets/images/logo__theme.png'
import { player } from './constants/router'
import App from './App'
import { useMount, useUpdateEffect, useUnmount, useMemoizedFn } from 'ahooks'

function AppContainer() {
  const { 
    songInfo, 
    isPlayerMedShow, 
    audioElRef, 
    hideMusicLoading, 
    playMusic, 
    pauseMusic, 
    switchPlayerMed 
  } = usePlayerStore()
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
    const play_url = songInfo.play_url
    const targetStatus = pathname !== player && play_url !== ''
    if (isPlayerMedShow !== targetStatus) {
      switchPlayerMed(targetStatus)
    }
  })

  const canPlayCb = useMemoizedFn((e: any) => {
    // ! play may return a reject error when user haven't interact with page
    hideMusicLoading()
    e.target
      .play()
      .then(() => playMusic())
      .catch(() => pauseMusic())
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

  const appProps = { isPlayerMedShow, isAppNavShow }

  return (
    <Fragment>
      <audio
        src={songInfo.play_url || undefined}
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
