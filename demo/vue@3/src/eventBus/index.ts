import mitt from 'mitt'

// 定义事件总线接口
interface EventBus {
  $on: (type: any, handler: any) => void
  $off: (type: any, handler: any) => void
  $emit: (type: any, event?: any) => void
}

const emitter = mitt<any>()
// todo add default namespaced

export default {
  // @ts-ignore
  $on: (...args: any[]) => emitter.on(...args),
  // @ts-ignore
  $off: (...args: any[]) => emitter.off(...args),
  // @ts-ignore
  $emit: (...args: any[]) => emitter.emit(...args)
} as EventBus
