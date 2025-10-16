import { IMG_SIZE__DEFAULT } from './model'
export function replaceSizeInUrl(
  url = '',
  size: number | string = IMG_SIZE__DEFAULT
) {
  return url.replace(/\{\s*size\s*\}/, String(size));
}
