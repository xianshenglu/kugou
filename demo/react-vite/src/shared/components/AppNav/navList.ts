import type { Location } from 'react-router-dom'
import {
  newSongs,
  rankList,
  songList,
  singerCategories
} from '../../constants/router'

export const navList = [
  {
    text: 'New Songs',
    name: 'new',
    path: newSongs
  },
  {
    text: 'Rank',
    name: 'rank',
    path: rankList
  },
  {
    text: 'Song List',
    name: 'song',
    path: songList
  },
  {
    text: 'Singer',
    name: 'singer',
    path: singerCategories
  }
]

export function shouldNavDisplay(location: Location) {
  return !!navList.find((nav) => nav.path === location.pathname)
}
