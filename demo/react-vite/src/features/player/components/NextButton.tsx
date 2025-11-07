import type { FC } from 'react'

interface NextButtonProps {
  next(...args: unknown[]): unknown;
  className?: string;
}

const NextButton: FC<NextButtonProps> = ({ next, className }) => {
  return (
    <button className={className} onClick={next}>
      <svg className="icon" aria-hidden="true">
        <use xlinkHref="#icon-next" />
      </svg>
    </button>
  )
}

export default NextButton

