//doc: https://github.com/xCss/JsonBird
const proxyUrl = 'https://bird.ioliu.cn/v1?url='
const baseApiHost = 'http://m.kugou.com'
const api: Record<string, string> = {
  newSongs: baseApiHost + '&json=true',
  rankList: baseApiHost + '/rank/list&json=true',
  rankInfo: baseApiHost + '/rank/info/?page=1&json=true&rankid=',
  songList: baseApiHost + '/plist/index&json=true',
  songListInfo: baseApiHost + '/plist/list/songListInfoId?json=true',
  singerCategories: baseApiHost + '/singer/class&json=true',
  singerList: baseApiHost + '/singer/list/singerListId?json=true',
  singerInfo: baseApiHost + '/singer/info/singerInfoId&json=true',
  songInfo: baseApiHost + '/app/i/getSongInfo.php?cmd=playInfo&hash=',
  songInfoHasLyric: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hotSearch:
    'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  keywordSearch:
    'http://mobilecdn.kugou.com/api/v3/search/song?format=json&page=1&pagesize=20&showtype=1&keyword='
}

Object.keys(api).forEach((key) => {
  api[key] = proxyUrl + api[key]
})
export default api
