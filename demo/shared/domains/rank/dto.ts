import type { SongBaseDto } from '../song/dto'

export interface RankItemDto {
  rankid: number
  id: number
  update_frequency: string
  intro: string
  jump_url: string
  jump_title: string
  imgurl: string
  banner7url: string
  isvol: number
  bannerurl: string
  custom_type: number
  rankname: string
  ranktype: number
}

export interface RankListResponseDto {
  JS_CSS_DATE: number
  kg_domain: string
  src: string
  fr: string | null
  ver: string
  rank: {
    total: number
    list: RankItemDto[]
  }
  __Tpl: string
}

export interface RankSongDto extends SongBaseDto {
  first: number
  addtime: string
  recommend_reason: string
  isfirst: number
  inlist:           number;
  topic_url_320:    string;
  topic_url_sq:     string;
  remark:           string;
  has_accompany:    number;
}

export interface RankInfoResponseDto {
  JS_CSS_DATE: number
  kg_domain: string
  src: string
  fr: string | null
  ver: string
  info: RankItemDto
  songs: {
    total: number
    page: number
    pagesize: number
    timestamp: number
    list: RankSongDto[]
  }
  pagesize: number
  __Tpl: string
}
