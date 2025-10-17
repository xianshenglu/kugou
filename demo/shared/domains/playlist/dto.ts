import type { SongDto } from '../song/dto'

export interface PlaylistBaseDto {
  collectcount: number
  imgurl: string
  intro: string
  playcount: number
  singername: string
  slid: number
  special_tag: number
  specialid: number
  specialname: string
  suid: number
  publishtime: string
  trans_param: {
    special_tag: number
  }
}

export interface PlaylistSummaryDto extends PlaylistBaseDto {
  username: string
  is_selected: number
  recommendfirst: number
  selected_reason: string
  ugc_talent_review: number
  user_avatar: string
  user_type: number
  verified: number
  songs?: SongDto[]
}

export interface PlaylistDetailSummaryDto extends PlaylistBaseDto {
  nickname: string
  songcount: number
  tags: any[]
  commentcount: number
  tagid: number
  tagname: string
}

export interface PlaylistListResponseDto {
  plist: {
    list: {
      timestamp: number
      info: PlaylistSummaryDto[]
      total: number
    }
  }
}

export interface PlaylistInfoResponseDto {
  list: {
    list: {
      info: SongDto[]
    }
  }
  info: {
    list: PlaylistDetailSummaryDto
  }
}
