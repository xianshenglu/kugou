const baseApiHost =
  import.meta.env.VITE_API_BASE_URL + '/demo/shared/mock/json-zh'

const requestUrls = {
  newSongs: `${baseApiHost}/newSong.json`,
  rankList: `${baseApiHost}/rankList.json`,
  rankInfo: `${baseApiHost}/rankInfo.json?`,
  songList: `${baseApiHost}/songList.json`,
  songListInfo: `${baseApiHost}/songListInfo.json?`,
  singerCategories: `${baseApiHost}/singerCategory.json`,
  singerList: `${baseApiHost}/singerList.json?`,
  singerInfo: `${baseApiHost}/singerInfo.json?`,
  songInfoHasLyric: `${baseApiHost}/songLyric.json?`,
  hotSearch: `${baseApiHost}/hotSearch.json`,
  keywordSearch: `${baseApiHost}/searchResult.json?`
}

export default requestUrls
