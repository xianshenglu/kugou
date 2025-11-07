import { useState, useRef } from 'react'
import { useEventListener, useMemoizedFn } from 'ahooks'
import usePlayerStore from '../../../../shared/player/usePlayerStore'

export function usePlayerProgress() {
  const { audioElRef } = usePlayerStore()
  const [currentTime, setCurrentTime] = useState(0)
  const [loadProgress, setLoadProgress] = useState(0)
  const [currentProgress, setCurrentProgress] = useState(0)
  const [isTouching, setIsTouching] = useState(false)
  
  const progressBarRef = useRef<HTMLDivElement>(null!)
  const progressBarRectRef = useRef<DOMRect | null>(null)
  const touchStartXRef = useRef(0)

  const calcCurTime = useMemoizedFn((end: number, start: number, type: number) => {
    const offsetX = end - start
    const percent = offsetX / (progressBarRectRef.current!.width)
    let newCurrentTime!: number
    const audioEl = audioElRef.current!
    
    switch (type) {
      case 0:
        newCurrentTime = audioEl.duration * percent
        break
      case 1:
        newCurrentTime = currentTime + audioEl.duration * percent
        break
    }
    if (newCurrentTime < 0) {
      newCurrentTime = 0
    } else if (newCurrentTime > audioEl.duration) {
      newCurrentTime = audioEl.duration
    }
    return newCurrentTime
  })

  const progressCb = useMemoizedFn(() => {
    // todo songs wouldn't download all now or user jumped. They all make the progress bar wouldn't continuous. So, the style may need change.
    const audioEl = audioElRef.current!
    if (audioEl.readyState < 2) {
      return
    }
    const bufferedLength = audioEl.buffered.length
    const newLoadProgress = Math.floor(
      (100 * audioEl.buffered.end(bufferedLength - 1)) / audioEl.duration
    )
    setLoadProgress(newLoadProgress)
  })

  const timeUpdateCb = useMemoizedFn((event: Event) => {
    if (isTouching) {
      return
    }
    const audioEl = audioElRef.current!
    
    const target = event.target as HTMLAudioElement
    const newCurrentTime = target.currentTime
    const newCurrentProgress = Math.floor((100 * newCurrentTime) / audioEl.duration)
    setCurrentTime(newCurrentTime)
    setCurrentProgress(newCurrentProgress)
  })

  const setCurTimeOnMove = useMemoizedFn((event: TouchEvent) => {
    const clientX = event.touches[0].clientX
    const newCurrentTime = calcCurTime(clientX, touchStartXRef.current, 1)
    const audioEl = audioElRef.current!
    const newCurrentProgress = Math.floor((100 * newCurrentTime) / audioEl.duration)
    setCurrentTime(newCurrentTime)
    setCurrentProgress(newCurrentProgress)
    touchStartXRef.current = clientX
  })

  const touchEndCb = useMemoizedFn(() => {
    const audioEl = audioElRef.current!
    setIsTouching(false)
    if(!Number.isNaN(currentTime)){
      audioEl.currentTime = currentTime
    }
    window.removeEventListener('touchmove', setCurTimeOnMove)
    // eslint-disable-next-line
    window.removeEventListener('touchend', touchEndCb)
  })

  const setCurTime = useMemoizedFn((event: TouchEvent) => {
    setIsTouching(true)
    if (!progressBarRectRef.current) {
      progressBarRectRef.current = progressBarRef.current!.getBoundingClientRect()
    }
    const clientX = event.touches[0].clientX
    const newCurrentTime = calcCurTime(clientX, progressBarRectRef.current!.left, 0)
    const audioEl = audioElRef.current!
    const newCurrentProgress = Math.floor((100 * newCurrentTime) / audioEl.duration)
    setCurrentTime(newCurrentTime)
    setCurrentProgress(newCurrentProgress)
    touchStartXRef.current = clientX
    window.addEventListener('touchmove', setCurTimeOnMove)
    window.addEventListener('touchend', touchEndCb)
  })
  
  useEventListener('progress', progressCb, { target: () => audioElRef.current })
  useEventListener('timeupdate', timeUpdateCb, { target: () => audioElRef.current })

  return {
    audioElRef,
    progressBarRef,
    currentTime,
    loadProgress,
    currentProgress,
    onTouchStart: setCurTime
  }
}

