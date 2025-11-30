import { realToMock } from './realToMock'
import { getSingerCategory as realGetSingerCategory } from '../../api/singerCategory.js'

export const getSingerCategory = realToMock(realGetSingerCategory, 'singerCategories')
