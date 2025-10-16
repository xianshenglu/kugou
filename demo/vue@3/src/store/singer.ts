import type { SingerCategory, SingerInfo as SingerInfoDetailsResponse, SingerSummary } from '@shared/domains/singer/model'
import type { MediaItem } from '@shared/domains/common/model'
export interface SingerInfoDetails extends Pick<SingerInfoDetailsResponse, 'albumcount' | 'intro'> {
  id: SingerInfoDetailsResponse['singerid']
  name: SingerInfoDetailsResponse['singername']
  count: SingerInfoDetailsResponse['songcount']
  imgUrl: SingerInfoDetailsResponse['imgurl']
}
interface SingerInfoData {
  info: SingerInfoDetails | null
  data: MediaItem[]
}

interface SingerListData {
  info: Record<string, any>
  data: SingerSummary[]
}
export interface SingerCategoryData {
  category: string;
  data: SingerCategory[];
}
export interface SingerState {
  singerCategories: SingerCategoryData[]
  singerInfo: SingerInfoData
  singerList: SingerListData
}

const singer: {
  namespaced: boolean
  state: () => SingerState
} = {
  namespaced: true,
  state: (): SingerState => ({
    singerCategories: [],
    singerInfo: {
      info: null,
      data: []
    },
    singerList: {
      info: {},
      data: []
    }
  })
}

export default singer
