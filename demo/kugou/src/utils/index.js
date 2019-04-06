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

export function lazyLoad(els, options) {
  let observer = new IntersectionObserver(
    entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.src = target.dataset.src
          observer.unobserve(target)
        }
      })
    },
    { threshold: 1, ...options }
  )
  Array.from(els).forEach(el => observer.observe(el))
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
