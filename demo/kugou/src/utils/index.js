export function watchRefs(
  parentNode = document,
  refsSelector,
  validator = els => els.length > 0
) {
  return new Promise(function(resolve) {
    let observer = new MutationObserver(callback)
    let config = { childList: true, subtree: true }
    observer.observe(parentNode, config)

    function callback(mutationsList, observer) {
      mutationsList.forEach(mutation => {
        if (mutation.type == 'childList') {
          let els = Array.from(parentNode.querySelectorAll(refsSelector))
          if (validator(els)) {
            observer.disconnect()
            resolve(Array.from(els))
          }
        }
      })
    }
  })
}

export function lazyLoad(els) {
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
export function getVBindObj(key, prefix = 'data-') {
  return {
    [`${prefix + key}`]: ''
  }
}
