import { IMG_SIZE__DEFAULT } from '@/constants'
export default function replaceSizeInUrl(url = '', size = IMG_SIZE__DEFAULT) {
  return url.replace(/\{\s*size\s*\}/, size)
}
