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
