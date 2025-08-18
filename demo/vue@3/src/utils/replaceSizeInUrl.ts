import { IMG_SIZE__DEFAULT } from '@/constants'

/**
 * 替换URL中的尺寸占位符
 * @param URL 图片URL
 * @param size 尺寸值
 * @returns 替换后的URL
 */
export default function replaceSizeInUrl(url: string = '', size: string = IMG_SIZE__DEFAULT): string {
  return url.replace(/\{\s*size\s*\}/, size)
}
