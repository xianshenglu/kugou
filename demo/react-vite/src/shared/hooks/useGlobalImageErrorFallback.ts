import { useEffect } from 'react'
import { useMemoizedFn } from 'ahooks'
import logo__theme from '../assets/images/logo__theme.png'

export function useGlobalImageErrorFallback() {
  const setBackupImg = useMemoizedFn((event: any) => {
    const target = event.target
    if (target.tagName && target.tagName.toLowerCase() === 'img') {
      target.src = logo__theme
    }
  })

  useEffect(() => {
    window.addEventListener('error', setBackupImg, true)
    return () => {
      window.removeEventListener('error', setBackupImg, true)
    }
  }, [setBackupImg])
}

