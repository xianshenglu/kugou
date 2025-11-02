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
