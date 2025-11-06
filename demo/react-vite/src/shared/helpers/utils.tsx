import type { KeyboardEvent } from 'react'

export function $_xsl__loadImgLazy(els: Array<HTMLImageElement>) {
  if (!Array.isArray(els)) {
    return
  }
  const unloadedImages = els.filter((img) => !img.dataset.isLoaded)
  unloadedImages.forEach((img) => {
    const top = img.getBoundingClientRect().top
    if (top < window.innerHeight) {
      img.src = img.dataset.src!
      img.dataset.isLoaded = true as any
    }
  })
}
export function formatDate(milliseconds: number) {
  const date = new Date(milliseconds)
  return (
    date.getFullYear() +
    '-' +
    String(date.getMonth() + 1).padStart(2, '0') +
    '-' +
    String(date.getDate()).padStart(2, '0')
  )
}
export function isEnterKey(event: KeyboardEvent): boolean {
  return event.code === 'Enter' || event.keyCode === 13 || event.key === 'Enter'
}
