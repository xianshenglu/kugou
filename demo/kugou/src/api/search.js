import { KU_GOU_MOBILE_CDN_ORIGIN } from './origin'

export const getHotSearch = {
  method: 'GET',
  url: KU_GOU_MOBILE_CDN_ORIGIN + '/api/v3/search/hot'
}

export const getSearchResult = {
  method: 'GET',
  url: KU_GOU_MOBILE_CDN_ORIGIN + '/api/v3/search/song'
}
