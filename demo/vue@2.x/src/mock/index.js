import Mock from 'mockjs'
import { getNewSong } from '../api/newSong'
import newSong from './newSong'
import { getRankList } from '../api/rankList'
import rankList from './rankList'
import { getSongList } from '../api/songList'
import songList from './songList'
import { getSingerCategory } from '../api/singerCategory'
import singerCategory from './singerCategory'
import { getSongLyric } from '../api/player'
import songLyric from './songLyric'
import { getRankInfo } from '../api/rankInfo'
import rankInfo from './rankInfo'
import { getSongListInfo } from '../api/songListInfo'
import songListInfo from './songListInfo'
import { getSingerList } from '../api/singerList'
import singerList from './singerList'
import { getSingerInfo } from '../api/singerInfo'
import singerInfo from './singerInfo'
import { getHotSearch, getSearchResult } from '../api/search'
import hotSearch from './hotSearch'
import searchResult from './searchResult'

// fix mock bug
Mock.XHR.prototype.__send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.__send.apply(this, arguments)
}
function getUrlReg(url) {
  return new RegExp(url.replace(/\//g, '\\/').replace(/\?/, '\\?'))
}
Mock.mock(getNewSong.url + '&json=true', newSong)
Mock.mock(getUrlReg(getRankList.url), rankList)
Mock.mock(getUrlReg(getSongList.url), songList)
Mock.mock(getUrlReg(getSingerCategory.url), singerCategory)
Mock.mock(getUrlReg(getRankInfo.url), rankInfo)
Mock.mock(getUrlReg(getSongListInfo.url), songListInfo)
Mock.mock(getUrlReg(getSingerList.url), singerList)
Mock.mock(getUrlReg(getSingerInfo.url), singerInfo)
Mock.mock(getUrlReg(getSongLyric.url), songLyric)
Mock.mock(getUrlReg(getHotSearch.url), hotSearch)
Mock.mock(getUrlReg(getSearchResult.url), searchResult)
