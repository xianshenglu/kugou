// 定义DOM元素类型
declare global {
  interface Document {
    [key: string]: any
  }
}

// 定义选择器类型
type Selector = string

// 定义元素验证函数类型
type Validator = (els: Element[]) => boolean

// 定义IntersectionObserver选项类型
interface IntersectionObserverOptions {
  threshold?: number
  root?: Element | null
  rootMargin?: string
}

/**
 * 监听DOM元素变化
 * @param parentNode 父节点
 * @param refsSelector 选择器
 * @param validator 验证函数
 * @returns Promise<Element[]> 返回匹配的元素数组
 */
export function watchRefs(
  parentNode: Document | Element = document,
  refsSelector: Selector,
  validator: Validator = els => els.length > 0
): Promise<Element[]> {
  return new Promise(function(resolve) {
    const observer = new MutationObserver(callback)
    const config = { childList: true, subtree: true }
    observer.observe(parentNode, config)

    function callback(mutationsList: MutationRecord[], observer: MutationObserver) {
      mutationsList.forEach(mutation => {
        if (mutation.type === 'childList') {
          const els = Array.from(parentNode.querySelectorAll(refsSelector)) as Element[]
          if (validator(els)) {
            observer.disconnect()
            resolve(els)
          }
        }
      })
    }
  })
}

/**
 * 懒加载图片
 * @param els 图片元素数组
 * @param options IntersectionObserver选项
 */
export function lazyLoad(els: Element[] | NodeListOf<Element>, options: IntersectionObserverOptions = {}) {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          const img = target as HTMLImageElement
          img.src = img.dataset.src || ''
          observer.unobserve(target)
        }
      })
    },
    { threshold: 1, ...options }
  )
  Array.from(els).forEach(el => observer.observe(el))
}

// todo tree-shake bug: https://github.com/webpack/webpack/issues/4453
// secondToMin only used once. But it exists in all chunks which have imported from this file.
/**
 * 将秒数转换为分钟:秒数格式
 * @param seconds 秒数
 * @returns 格式化后的时间字符串
 */
export function secondToMin(seconds: number | string): string {
  const numSeconds = Number(seconds)
  if (isNaN(numSeconds)) {
    return '00:00'
  }
  //todo support more than 1 hour
  const totalSeconds = Math.floor(numSeconds)
  const second = totalSeconds % 60
  const min = Math.floor(totalSeconds / 60)
  return String(min).padStart(2, '0') + ':' + String(second).padStart(2, '0')
}

/**
 * 生成v-bind对象
 * @param key 键名
 * @param prefix 前缀
 * @returns v-bind对象
 */
export function getVBindObj(key: string, prefix: string = 'data-'): Record<string, string> {
  return {
    [`${prefix + key}`]: ''
  }
}

/**
 * 检查对象是否为普通对象
 * @param obj 要检查的对象
 * @returns 是否为普通对象
 */
export function isObject(obj: any): obj is Record<string, any> {
  return typeof obj === 'object' && obj !== null
}
