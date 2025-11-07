import { lazy } from 'react'
import type { ComponentType } from 'react'

export function lazyWithPrefetch<T extends ComponentType<any>>(
  factory: () => Promise<{ default: T }>,
  wantLoadWhenIdle = true
) {
  const Component = lazy(factory)

  if (wantLoadWhenIdle) {
    window.requestIdleCallback?.(() => {
      factory()
    })
  }

  return Component
}
