import { useEffect } from 'react'
import { useMemoizedFn } from 'ahooks'

export function useGlobalCssCustomVar() {
  const setCssCustomVar = useMemoizedFn(() => {
    document.documentElement.style.setProperty('--vh', window.innerHeight / 100 + 'px')
  })

  useEffect(() => {
    setCssCustomVar()
  }, [setCssCustomVar])
}

