import type {
  SingerCategoryDto,
  SingerSummaryDto,
  SingerInfoDto,
  SingerSongDto,
} from './dto'

export interface SingerCategory extends SingerCategoryDto {
  path: string
}
export interface SingerSummary extends SingerSummaryDto {
  id: number
  name: string
  imgUrl: string
  path: string
}
export interface SingerCategoryInfo {
  id: SingerCategoryDto['classid']
  name: SingerCategoryDto['classname']
  count: number
}
export interface SingerInfo extends SingerCategoryInfo, Pick<SingerInfoDto, 'albumcount' | 'intro'> {
  imgUrl: SingerInfoDto['imgurl']
  path: string;
}

export interface SingerListData {
  info: SingerCategoryInfo;
  data: SingerSummary[]
}

export interface SingerInfoData {
  info: SingerInfo
  data: SingerSongDto[]
}

export interface SingerCategoryData {
  category: string;
  data: SingerCategory[];
}