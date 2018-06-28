// proxy all requests starting with /api to http://m.kugou.com
export default {
  newSong: '/proxy_api/?json=true',
  rankList: '/proxy_api/rank/list&json=true',
  rankInfo: '/proxy_api/rank/info/?page=1&json=true&rankid=',
  songList: '/proxy_api/plist/index&json=true',
  songListInfo: '/proxy_api/plist/list/songListId?json=true',
  singerCategory: '/proxy_api/singer/class&json=true',
  singer_song: '/proxy_api/singer/list/88?json=true',
  singer_info: '/proxy_api/singer/info/3060&json=true',
  song_info: '/proxy_api/app/i/getSongInfo.php?cmd=playInfo&hash=',
  song_info_lyric: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hot_search:
    'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  search_result:
    'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1'
}
