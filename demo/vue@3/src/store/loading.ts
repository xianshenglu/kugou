export interface LoadingState {
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
