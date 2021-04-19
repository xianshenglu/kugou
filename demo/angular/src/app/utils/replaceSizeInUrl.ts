import { IMG_SIZE__DEFAULT } from 'src/app/constants';
export default function replaceSizeInUrl(
  url = '',
  size: number | string = IMG_SIZE__DEFAULT
) {
  return url.replace(/\{\s*size\s*\}/, String(size));
}
