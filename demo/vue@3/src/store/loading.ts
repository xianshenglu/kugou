// 定义加载状态接口
interface LoadingState {
  isShow: boolean
  sizeClassName: string
}

const loading: {
  namespaced: boolean
  state: () => LoadingState
} = {
  namespaced: true,
  state: (): LoadingState => ({
    isShow: false,
    sizeClassName: ''
  })
}

export default loading
