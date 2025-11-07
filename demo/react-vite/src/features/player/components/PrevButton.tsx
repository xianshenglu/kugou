import type { FC } from 'react'

interface PrevButtonProps {
  prev(...args: unknown[]): unknown;
  className?: string;
}

const PrevButton: FC<PrevButtonProps> = ({ prev, className }) => {
  return (
    <button className={className} onClick={prev}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-previous" />
      </svg>
    </button>
  )
}

export default PrevButton

