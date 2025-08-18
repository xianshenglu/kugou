import logo__text from '../assets/images/logo__text.png'
import logo__grey from '../assets/images/logo__grey.png'
import logo__theme from '../assets/images/logo__theme.png'

// 定义图片状态接口
interface ImagesState {
  logo__text: string
  logo__grey: string
  logo__theme: string
}

const images: {
  namespaced: boolean
  state: () => ImagesState
} = {
  namespaced: true,
  state: (): ImagesState => ({
    logo__text,
    logo__grey,
    logo__theme
  })
}

export default images
