import { useState, useLayoutEffect } from 'react'

export function useOffsetToParent(
  getElement: () => HTMLElement | null,
  deps: any[]
) {
  const [offsetToParent, setOffsetToParent] = useState({ left: 0, width: 0 })

  useLayoutEffect(() => {
    const activeNavEl = getElement()
    if (activeNavEl) {
      const activeNavLeft =
        activeNavEl.getBoundingClientRect().left -
        activeNavEl.parentElement!.getBoundingClientRect().left
      const newRect = { left: activeNavLeft, width: activeNavEl.offsetWidth }
      setOffsetToParent(newRect)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return offsetToParent
}
