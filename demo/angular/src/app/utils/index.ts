/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { IMG_SIZE_DEFAULT } from 'src/app/constants';

export function lazyLoad(
  els: HTMLImageElement[],
  options: Record<string, any>
) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          // @ts-ignore
          // eslint-disable-next-line
          target.src = target.dataset.src;
          observer.unobserve(target);
        }
      });
    },
    { threshold: 1, ...options }
  );
  Array.from(els).forEach((el) => observer.observe(el));
}

export function secondToMin(seconds: number) {
  if (Number.isNaN(Number(seconds))) {
    return '00:00';
  }
  // todo support more than 1 hour
  seconds = Math.floor(seconds);
  const second = seconds % 60;
  const min = Math.floor(seconds / 60);
  return `${String(min).padStart(2, '0')}:${String(second).padStart(2, '0')}`;
}
export function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null;
}

export function replaceSizeInUrl(
  url = '',
  size: number | string = IMG_SIZE_DEFAULT
) {
  return url.replace(/\{\s*size\s*\}/, String(size));
}
