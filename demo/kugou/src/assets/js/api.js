//doc: https://github.com/xCss/JsonBird
let proxyUrl = 'https://bird.ioliu.cn/v1?url=';
let baseApiHost = 'http://m.kugou.com'
let api = {
  newSong: baseApiHost + '/?json=true',
  rankList: baseApiHost + '/rank/list&json=true',
  rankInfo: baseApiHost + '/rank/info/?page=1&json=true&rankid=',
  songList: baseApiHost + '/plist/index&json=true',
  songListInfo: baseApiHost + '/plist/list/songListId?json=true',
  singerCategory: baseApiHost + '/singer/class&json=true',
  singerCategoryInfo:
    baseApiHost + '/singer/list/singerCategoryInfoId?json=true',
  singerInfo: baseApiHost + '/singer/info/singerId&json=true',
  song_info: baseApiHost + '/app/i/getSongInfo.php?cmd=playInfo&hash=',
  song_info_lyric: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hotSearch:
    'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  search_result:
    'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1'
};

Reflect.ownKeys(api).forEach(key => {
  api[key] = proxyUrl + api[key];
});
export default api;
