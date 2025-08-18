(function() {
  // 获取HTML元素
  const html = document.documentElement
  
  /**
   * 设置系统静态信息
   */
  function setSysStaticInfo(): void {
    html.setAttribute('data-dpr', (window.devicePixelRatio || 1).toString())
    html.setAttribute('data-original-device-width', window.innerWidth.toString())
    html.setAttribute('data-original-device-height', window.innerHeight.toString())
  }
  
  /**
   * 获取当前屏幕方向
   * @returns 'landscape' 或 'portrait'
   */
  function getCurrentOrient(): 'landscape' | 'portrait' {
    return Math.abs(window.orientation) === 90 ? 'landscape' : 'portrait'
  }
  
  /**
   * 设置当前屏幕方向
   */
  function setCurrentOrient(): void {
    html.setAttribute('data-orientation', getCurrentOrient())
  }
  
  /**
   * 初始化移动端布局
   */
  function initialMobileLayout(): void {
    const isLandscape = getCurrentOrient() === 'landscape'
    const deviceWidth = isLandscape
      ? html.getAttribute('data-original-device-height')
      : html.getAttribute('data-original-device-width')
    
    const dpr = html.getAttribute('data-dpr')
    
    if (dpr && deviceWidth) {
      setRem(dpr)
      setMetaViewport(dpr, deviceWidth)
    }
  }
  
  /**
   * 设置根元素字体大小
   * @param dpr 设备像素比
   */
  function setRem(dpr?: string): void {
    html.style.fontSize = 'initial'
    const computedStyle = getComputedStyle(html)
    if (computedStyle) {
      const fontSize = parseInt(computedStyle.fontSize)
      if (!isNaN(fontSize)) {
        html.style.fontSize = `${fontSize * (dpr ? parseFloat(dpr) : 1)}px`
      }
    }
  }
  
  /**
   * 设置视口元标签
   * @param dpr 设备像素比
   * @param deviceWidth 设备宽度
   */
  function setMetaViewport(dpr: string, deviceWidth: string): void {
    const metaViewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement
    if (metaViewport) {
      const dprValue = dpr ? parseFloat(dpr) : 1
      const deviceWidthValue = deviceWidth ? parseFloat(deviceWidth) : window.innerWidth
      
      metaViewport.setAttribute(
        'content',
        `width=${dprValue * deviceWidthValue},initial-scale=${1 / dprValue}`
      )
    }
  }
  
  /**
   * 处理屏幕方向变化
   */
  function orientationResize(): void {
    const isOrientationChange =
      html.getAttribute('data-orientation') !== getCurrentOrient()
    if (isOrientationChange) {
      initialMobileLayout()
      setCurrentOrient()
    }
  }
  
  // 添加事件监听器
  document.addEventListener('DOMContentLoaded', setSysStaticInfo, { capture: true })
  document.addEventListener('DOMContentLoaded', initialMobileLayout, { capture: true })
  window.addEventListener('orientationchange', orientationResize, { capture: true })
  
  // 处理页面显示事件（如从缓存恢复）
  window.addEventListener('pageshow', function(event: PageTransitionEvent) {
    if (event.persisted) {
      setRem()
    }
  })
})()
