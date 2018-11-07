import store from '../../store/index'
const errorBackUpImg = require('../images/logo--sky_blue.png')
window.addEventListener('error', setImgBackupSrc, true)
window.addEventListener('scroll', letPlayerMedSmall, true)
window.addEventListener('resize', hidePlayerMed, true)

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
