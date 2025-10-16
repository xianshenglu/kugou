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
export interface SingerInfoShort {
  id: SingerInfoDto['singerid']
  name: SingerInfoDto['singername']
  count: SingerInfoDto['songcount']
}
export interface SingerInfo extends SingerInfoShort, Pick<SingerInfoDto, 'albumcount' | 'intro'> {
  imgUrl: SingerInfoDto['imgurl']
  path: string;
}

export interface SingerListData {
  info: SingerInfoShort;
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