const baseApiHost =
  'https://xianshenglu.github.io/kugou/demo/shared/mock/json-en'

const api = {
  newSongs: `${baseApiHost}/newSong.json`,
  rankList: `${baseApiHost}/rankList.json`,
  rankInfo: `${baseApiHost}/rankInfo.json?`,
  songList: `${baseApiHost}/songList.json`,
  songListInfo: `${baseApiHost}/songListInfo.json`,
  singerCategories: `${baseApiHost}/singerCategory.json`,
  singerList: `${baseApiHost}/singerList.json`,
  singerInfo: `${baseApiHost}/singerInfo.json`,
  songInfoHasLyric: `${baseApiHost}/songLyric.json?`,
  hotSearch: `${baseApiHost}/hotSearch.json`,
  keywordSearch: `${baseApiHost}/searchResult.json?`
}

export default api
