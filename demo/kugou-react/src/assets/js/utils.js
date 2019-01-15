import { imgSize } from '../../constants/ui'

export function $_xsl__replaceImgUrlSize(str = '', size = imgSize) {
  return str.replace(/\{\s*size\s*\}/, size)
}
export function secondToMin(seconds) {
  if (isNaN(Number(seconds))) {
    return '00:00'
  }
  //todo support more than 1 hour
  seconds = Math.floor(seconds)
  let second = seconds % 60
  let min = Math.floor(seconds / 60)
  return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0')
}
export function $_xsl__loadImgLazy(els) {
  if (!Array.isArray(els)) {
    return
  }
  let unloadedImages = els.filter(img => !img.dataset.isLoaded)
  unloadedImages.forEach(img => {
    let top = img.getBoundingClientRect().top
    if (top < window.innerHeight) {
      img.src = img.dataset.src
      img.dataset.isLoaded = true
    }
  })
}
export function getComponentDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
