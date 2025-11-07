import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../../constants/router'

export const navList = [
  {
    text: '新歌',
    name: 'new',
    path: newSongs
  },
  {
    text: '排行',
    name: 'rank',
    path: rankList
  },
  {
    text: '歌单',
    name: 'song',
    path: songList
  },
  {
    text: '歌手',
    name: 'singer',
    path: singerCategories
  }
]

