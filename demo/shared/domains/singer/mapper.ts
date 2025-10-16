import { replaceSizeInUrl } from '../common/mapper'
import type { SingerSummaryDto, SingerListResponseDto, SingerInfoResponseDto, SingerCategoryListResponseDto } from './dto'
import type {SingerInfoData, SingerListData, SingerSummary, SingerCategoryData} from './model'
function mapSingerSummary(dto: SingerSummaryDto): SingerSummary {
  return {
    ...dto,
    id: dto.singerid,
    name: dto.singername,
    imgUrl: replaceSizeInUrl(dto.imgurl),
    path: `/singer/info/${dto.singerid}`,
  }
}

export function mapSingerInfoData(dto: SingerInfoResponseDto): SingerInfoData {
  const info = dto.info
  return {
   info: {
      ...info,
      id: info.singerid,
      name: info.singername,
      count: info.songcount,
      imgUrl: replaceSizeInUrl(info.imgurl),
      intro: info.intro,
      path: `/singer/info/${info.singerid}`,
   },
   data: dto.songs.list.map((obj: any) => {
      // obj.path='/singer/info/'+obj.id
      return {...obj, name: obj.filename}
    })
  }
}

export function mapSingerListData(dto: SingerListResponseDto): SingerListData {
  const data = dto.singers.list.info.map(mapSingerSummary)
  return {
    data,
    info: {
      id: dto.classid,
      name: dto.classname,
      count: dto.singers.total
    },
  }
}
export function mapSingerCategoryData(dto: SingerCategoryListResponseDto): SingerCategoryData[] {
  return dto.list.reduce<SingerCategoryData[]>((re, obj) => {
    const newObj = {...obj, path: '/singer/list/' + obj.classid }
    const findCategories = re.find(
      o => o.category === obj.classname.substring(0, 2)
    )
    if (findCategories) {
      findCategories.data.push(newObj)
    } else {
      re.push({
        category: obj.classname.substring(0, 2),
        data: [newObj]
      })
    }
    return re
  }, [])
}
