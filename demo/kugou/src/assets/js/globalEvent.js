import store from '../../store/index'
import router from '../../router/index'

const errorBackUpImg = require('../images/logo--sky_blue.png')

window.addEventListener('error', setImgBackupSrc, true)
window.addEventListener('scroll', letPlayerMedSmall, true)
window.addEventListener('resize', hidePlayerMed, true)
window.addEventListener('touchstart', toggleBetweenPages, true)

function setImgBackupSrc(event) {
  let target = event.target
  if (target.tagName && target.tagName.toLowerCase() === 'img') {
    target.src = errorBackUpImg
  }
}
function letPlayerMedSmall() {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedSmall',
    data: true
  })
}
function hidePlayerMed() {
  store.commit('replaceProperty', {
    paths: 'player.isPlayerMedShow',
    data: window.innerHeight > store.state.device.vMax * 0.8
  })
}
function toggleBetweenPages(event) {
  let interval = 300
  let startTime = Date.now()
  let minOffset = window.innerWidth * 0.1
  let maxOffset = window.innerWidth * 0.4
  let startClientX = event.touches[0].clientX
  let startClientY = event.touches[0].clientY
  window.addEventListener('touchend', detectToSwipe, true)
  function detectToSwipe(event) {
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
    let staticLikePagesPath = router.staticLikePagesPath
    let curRouteIndex = staticLikePagesPath.indexOf(router.currentRoute.path)

    if (curRouteIndex >= 0 && (isSlowMoveEnough || isFastMoveEnough)) {
      let nextRouteIndex = direction ? curRouteIndex + 1 : curRouteIndex - 1
      let nextRoutePath = staticLikePagesPath[nextRouteIndex]
      if (nextRoutePath === undefined) {
        nextRoutePath = direction
          ? staticLikePagesPath[0]
          : staticLikePagesPath.slice().pop()
      }
      router.push(nextRoutePath)
    }
  }
}
