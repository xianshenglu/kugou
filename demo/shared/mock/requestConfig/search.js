import { realToMock } from './realToMock'
import { getHotSearch as realGetHotSearch, getSearchResult as realGetSearchResult } from '../../api/search.js'

export const getHotSearch = realToMock(realGetHotSearch, 'hotSearch')
export const getSearchResult = realToMock(realGetSearchResult, 'keywordSearch')
