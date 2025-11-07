import { useMemoizedFn } from 'ahooks'
import { useEventListener } from 'ahooks'

type SwipeOptions = {
  minOffset?: number
  maxOffset?: number
  interval?: number
  onSwipe: (direction: 'left' | 'right') => void
}

export function useSwipe(options: SwipeOptions) {
  const {
    minOffset = window.innerWidth * 0.1,
    maxOffset = window.innerWidth * 0.4,
    interval = 300,
    onSwipe
  } = options

  const toggleBetweenPages = useMemoizedFn((event: TouchEvent) => {
    const startTime = Date.now()
    const startClientX = event.touches[0].clientX
    const startClientY = event.touches[0].clientY

    const detectToSwipe = (event: TouchEvent) => {
      window.removeEventListener('touchend', detectToSwipe, true)

      const endClientX = event.changedTouches[0].clientX
      const endClientY = event.changedTouches[0].clientY
      const offsetX = Math.abs(endClientX - startClientX)
      const offsetY = Math.abs(endClientY - startClientY)
      if (offsetY > offsetX) {
        return
      }
      const direction = endClientX - startClientX < 0 ? 'left' : 'right'
      const endTime = Date.now()
      const isSlow = endTime - startTime > interval
      const isSlowMoveEnough = isSlow && offsetX > maxOffset
      const isFastMoveEnough = !isSlow && offsetX > minOffset
      
      if (isSlowMoveEnough || isFastMoveEnough) {
        onSwipe(direction)
      }
    }
    window.addEventListener('touchend', detectToSwipe, true)
  })

  useEventListener('touchstart', toggleBetweenPages, { target: window })
}

