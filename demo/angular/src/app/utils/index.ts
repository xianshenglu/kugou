export function lazyLoad(
  els: HTMLImageElement[],
  options: Record<string, any>
) {
  let observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          // @ts-ignore
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
  if (isNaN(Number(seconds))) {
    return '00:00';
  }
  //todo support more than 1 hour
  seconds = Math.floor(seconds);
  let second = seconds % 60;
  let min = Math.floor(seconds / 60);
  return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0');
}
export function isObject(obj: any) {
  return typeof obj === 'object' && obj !== null;
}
