import store from '../../store/index'
import router from '../../router/index'

// 设置备用图片
function setBackupImg(event: ErrorEvent): void {
  const target = event.target as HTMLElement
  if (target.tagName && target.tagName.toLowerCase() === 'img') {
    (target as HTMLImageElement).src = store.state.images.logo__theme
  }
}

// 设置播放器为小尺寸
function letPlayerMedSmall(): void {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedSmall',
    data: true
  })
}

// 切换播放器尺寸
function togglePlayerMed(): void {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedShow',
    data:
      window.innerHeight > store.state.device.vMax * 0.8 &&
      store.state.player.music
  })
}

// 切换页面
function toggleBetweenPages(event: TouchEvent): void {
  const interval = 300
  const startTime = Date.now()
  const minOffset = window.innerWidth * 0.1
  const maxOffset = window.innerWidth * 0.4
  const startClientX = event.touches[0]!.clientX
  const startClientY = event.touches[0]!.clientY
  
  window.addEventListener('touchend', detectToSwipe, true)
  
  function detectToSwipe(event: TouchEvent): void {
    window.removeEventListener('touchend', detectToSwipe, true)

    const endClientX = event.changedTouches[0]!.clientX
    const endClientY = event.changedTouches[0]!.clientY
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
    
    const staticLikePagesPath = router.options.routes[0]!.children!.map(
      child => child.path
    )
    
    const curRouteIndex = staticLikePagesPath.indexOf(
      router.currentRoute.value.path
    )

    if (curRouteIndex >= 0 && (isSlowMoveEnough || isFastMoveEnough)) {
      const nextRouteIndex = direction ? curRouteIndex + 1 : curRouteIndex - 1
      const nextRoutePath = staticLikePagesPath[nextRouteIndex]
      
      if (nextRoutePath === undefined) {
        return
      }
      
      router.push(nextRoutePath)
    }
  }
}

// 添加全局事件监听器
window.addEventListener('error', setBackupImg, true)
window.addEventListener('scroll', letPlayerMedSmall, true)
window.addEventListener('resize', togglePlayerMed, true)
window.addEventListener('touchstart', toggleBetweenPages)
