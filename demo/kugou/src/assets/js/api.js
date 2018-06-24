// proxy all requests starting with /api to http://m.kugou.com
export default {
  new_songs: '/proxy_api/?json=true',
  rank: '/proxy_api/rank/list&json=true',
  rank_info: '/proxy_api/rank/info/?rankid=8888&page=1&json=true',
  songs_list: '/proxy_api/plist/index&json=true',
  songs_list_info: '/proxy_api/plist/list/125032?json=true',
  singer_categories: '/proxy_api/singer/class&json=true',
  singer_songs: '/proxy_api/singer/list/88?json=true',
  singer_info: '/proxy_api/singer/info/3060&json=true',
  song_info: '/proxy_api/app/i/getSongInfo.php?cmd=playInfo&hash=',
  song_info_lyric: 'http://www.kugou.com/yy/index.php?r=play/getdata&hash=',
  hot_search:
    'http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30',
  search_result:
    'http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword=%E7%8E%8B%E5%8A%9B%E5%AE%8F&page=1&pagesize=20&showtype=1'
}
