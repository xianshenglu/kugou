import type { SongBaseDto } from "../song/dto"

export interface HotSearchItemDto {
  sort: number
  keyword: string
  jumpurl?: string
}

export interface HotSearchDataDto {
  timestamp?: number
  info: HotSearchItemDto[]
}

export interface HotSearchResponseDto {
  status: number
  data: HotSearchDataDto
}

interface SearchAggregationDto {
  key: string
  count: number
}
export interface SearchResultItemDto extends SongBaseDto {
    othername_original: string;
    isoriginal:         number;
    source:             string;
    topic:              string;
    Accompany:          number;
    songname_original:  string;
    singername:         string;
    sourceid:           number;
    group:              any[];
    songname:           string;
    ownercount:         number;
    fold_type:          number;
    isnew:              number;
    srctype:            number;
    album_name:         string;
    othername:          string;
}
export interface SearchResultDataDto {
  aggregation: SearchAggregationDto[]
  tab: string
  info: SearchResultItemDto[]
  correctiontype: number
  timestamp: number
  allowerr: number
  total: number
  istag: number
  istagresult: number
  forcecorrection: number
  correctiontip: string
}

export interface SearchResultResponseDto {
  status: number
  error: string
  data: SearchResultDataDto
  errcode: number
}
