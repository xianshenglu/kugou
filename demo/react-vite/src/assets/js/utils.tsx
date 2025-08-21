import type { KeyboardEvent } from 'react'
import { imgSize } from '../../constants/ui'

export function $_xsl__replaceImgUrlSize(str = '', size: string | number = imgSize) {
  return str.replace(/\{\s*size\s*\}/g, String(size))
}
export function secondToMin(seconds: number | string): string {
  if (isNaN(Number(seconds))) {
    return '00:00'
  }
  //todo support more than 1 hour
  const secs = Math.floor(Number(seconds))
  const second = secs % 60
  const min = Math.floor(secs / 60)
  return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0')
}
export function $_xsl__loadImgLazy(els: Array<HTMLImageElement>) {
  if (!Array.isArray(els)) {
    return
  }
  let unloadedImages = els.filter((img) => !img.dataset.isLoaded)
  unloadedImages.forEach((img) => {
    let top = img.getBoundingClientRect().top
    if (top < window.innerHeight) {
      img.src = img.dataset.src!
      img.dataset.isLoaded = true as any
    }
  })
}
export function getComponentDisplayName(WrappedComponent: any): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
export function formatDate(milliseconds: number) {
  let date = new Date(milliseconds)
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
