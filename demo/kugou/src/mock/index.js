import Mock from 'mockjs'
import api from '../assets/js/api'
import newSong from './newSong'
import rankList from './rankList'
import songList from './songList'
import singerCategory from './singerCategory'
import songLyric from './songLyric'
import rankInfo from './rankInfo'
import songListInfo from './songListInfo'
import singerList from './singerList'
import singerInfo from './singerInfo'
import hotSearch from './hotSearch'
import searchResult from './searchResult'

Mock.mock(api.newSong, newSong)
Mock.mock(api.rankList, rankList)
Mock.mock(api.songList, songList)
Mock.mock(api.singerCategory, singerCategory)
Mock.mock(api.rankInfo + rankList.rank.list[0].rankid, rankInfo)
Mock.mock(
  api.songListInfo.replace('songListId', songList.plist.list.info[0].specialid),
  songListInfo
)
Mock.mock(
  api.singerList.replace('singerListId', singerCategory.list[0].classid),
  singerList
)
Mock.mock(
  api.singerInfo.replace('singerId', singerList.singers.list.info[0].singerid),
  singerInfo
)
Mock.mock(api.songLyric + newSong.data[0].hash, songLyric)
Mock.mock(api.hotSearch, hotSearch)
Mock.mock(
  api.searchResult + encodeURIComponent(hotSearch.data.info[0].keyword),
  searchResult
)
