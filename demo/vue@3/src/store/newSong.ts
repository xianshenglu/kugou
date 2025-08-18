// 定义新歌状态接口
interface NewSongState {
  newSongs: any[]
  sliderData: any[]
}

const newSong: {
  namespaced: boolean
  state: () => NewSongState
} = {
  namespaced: true,
  state: (): NewSongState => ({
    newSongs: [],
    sliderData: []
  })
}

export default newSong
