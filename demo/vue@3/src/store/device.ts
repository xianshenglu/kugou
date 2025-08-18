// 定义设备状态接口
interface DeviceState {
  vh: number
  vMax: number
}

const device: {
  namespaced: boolean
  state: () => DeviceState
} = {
  namespaced: true,
  state: (): DeviceState => ({
    vh: document.documentElement.clientHeight,
    vMax: Math.max(
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    )
  })
}

export default device
