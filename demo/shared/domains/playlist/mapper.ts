import { replaceSizeInUrl } from '../common/mapper'
import type { PlaylistListResponseDto, PlaylistInfoResponseDto, PlaylistSummaryDto, PlaylistDetailSummaryDto } from './dto'
import type { PlaylistListData, PlaylistInfoData, PlaylistSummary, PlaylistInfoDetail } from './model'

function mapPlaylistSummary(dto: PlaylistSummaryDto): PlaylistSummary {
  return {
    ...dto,
    imgUrl: replaceSizeInUrl(dto.imgurl),
    path: `/song/list/${dto.specialid}`,
    title: dto.specialname,
    popularity: dto.playcount,
  }
}

export function mapPlaylistList(dto: PlaylistListResponseDto): PlaylistListData {
  const info = dto.plist.list.info
  return info.map(mapPlaylistSummary)
}

function mapPlaylistInfoDetail(dto: PlaylistInfoResponseDto['info']): PlaylistInfoDetail {
  return {
    ...dto,
    list: {
      ...dto.list,
      imgUrl: replaceSizeInUrl(dto.list.imgurl),
    }
  }
}

export function mapPlaylistInfo(dto: PlaylistInfoResponseDto): PlaylistInfoData {
  return {
    info: mapPlaylistInfoDetail(dto.info),
    songs: dto.list,
  }
}
