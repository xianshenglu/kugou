(function() {
  document.addEventListener(
    'DOMContentLoaded',
    setSysStaticInfo,
    { capture: true },
    true
  )
  document.addEventListener(
    'DOMContentLoaded',
    initialMobileLayout,
    { capture: true },
    true
  )
  window.addEventListener(
    'orientationchange',
    orientationResize,
    { capture: true },
    true
  )
  window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
      setRem()
    }
  })
  let html = document.documentElement
  function setSysStaticInfo() {
    html.setAttribute('data-dpr', window.devicePixelRatio || 1)
    html.setAttribute('data-original-device-width', window.innerWidth)
    html.setAttribute('data-original-device-height', window.innerHeight)
  }
  function getCurrentOrient() {
    return Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait'
  }
  function setCurrentOrient() {
    html.setAttribute('data-orientation', getCurrentOrient())
  }
  function initialMobileLayout() {
    let isLandscape = getCurrentOrient() === 'landscape'
    let deviceWidth = isLandscape
      ? html.getAttribute('data-original-device-height')
      : html.getAttribute('data-original-device-width')
    let dpr = html.getAttribute('data-dpr')
    setRem(dpr)
    setMetaViewport(dpr, deviceWidth)
  }
  function setRem(dpr) {
    html.style.fontSize = 'initial'
    html.style.fontSize = parseInt(getComputedStyle(html).fontSize) * dpr + 'px'
  }
  function setMetaViewport(dpr, deviceWidth) {
    let metaViewport = document.querySelector('meta[name=viewport]')
    metaViewport.setAttribute(
      'content',
      `width=${dpr * deviceWidth},initial-scale=${1 / dpr}`
    )
  }
  function orientationResize() {
    let isOrientationChange =
      html.getAttribute('data-orientation') !== getCurrentOrient()
    if (isOrientationChange) {
      initialMobileLayout()
      setCurrentOrient()
    }
  }
})()
