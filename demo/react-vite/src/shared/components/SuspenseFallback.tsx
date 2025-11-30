import type { FC, PropsWithChildren } from 'react'

const SuspenseFallback: FC<PropsWithChildren<{ className?: string }>> = ({
  children, className
}) => {
  return (
    <div className={className} aria-hidden="true">
      {children}
    </div>
  )
}

export default SuspenseFallback
