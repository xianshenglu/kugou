import { replaceSizeInUrl } from '../common/mapper'
import type { PlaylistListResponseDto, PlaylistInfoResponseDto, PlaylistSummaryDto } from './dto'
import type { PlaylistListData, PlaylistInfoData, PlaylistSummary } from './model'

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

export function mapPlaylistInfo(dto: PlaylistInfoResponseDto): PlaylistInfoData {
  return {
    info: dto.info,
    songs: dto.list,
  }
}
