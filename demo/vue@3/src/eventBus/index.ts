import mitt from 'mitt'

// 定义事件总线接口
interface EventBus {
  $on: (type: any, handler: any) => void
  $once: (type: any, handler: any) => void
  $off: (type: any, handler: any) => void
  $emit: (type: any, event?: any) => void
}

const emitter = mitt<any>()
// todo add default namespaced

export default {
  $on: (...args: any[]) => emitter.on(...args),
  $once: (...args: any[]) => emitter.once(...args),
  $off: (...args: any[]) => emitter.off(...args),
  $emit: (...args: any[]) => emitter.emit(...args)
} as EventBus
