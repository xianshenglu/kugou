//doc: https://github.com/xCss/JsonBird
let targetHost = 'http://m.kugou.com/';
let proxyHost = 'https://bird.ioliu.cn/v1?url=' + targetHost;

export default {
  newSong: proxyHost + '?json=true',
  rankList: proxyHost + 'rank/list&json=true',
  rankInfo: proxyHost + 'rank/info/?page=1&json=true&rankid=',
  songList: proxyHost + 'plist/index&json=true',
  songListInfo: proxyHost + 'plist/list/songListId?json=true',
  singerCategory: proxyHost + 'singer/class&json=true',
  singerCategoryInfo: proxyHost + 'singer/list/singerCategoryInfoId?json=true',
  singerInfo: proxyHost + 'singer/info/singerId&json=true',
  song_info: proxyHost + 'app/i/getSongInfo.php?cmd=playInfo&hash=',
  song_info_lyric: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hot_search:
    'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  search_result:
    'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1'
};
