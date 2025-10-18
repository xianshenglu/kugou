export interface SongBaseDto {
    pay_type_320:     number;
    m4afilesize:      number;
    price_sq:         number;
    filesize:         number;
    bitrate:          number;
    price:            number;
    old_cpy:          number;
    pkg_price_sq:     number;
    pay_type:         number;
    topic_url:        string;
    rp_type:          string;
    pkg_price:        number;
    feetype:          number;
    filename:         string;
    price_320:        number;
    extname:          string;
    hash:             string;
    audio_id:         number;
    sqfilesize:       number;
    privilege:        number;
    trans_param: {
        roaming_astrict:   number;
        pay_block_tpl:     number;
        musicpack_advance: number;
        display_rate:      number;
        display:           number;
        cid:               number;
    };
    album_audio_id:   number;
    "320hash":        string;
    fail_process_320: number;
    fail_process_sq:  number;
    "320filesize":    number;
    rp_publish:       number;
    duration:         number;
    sqhash:           string;
    "320privilege":   number;
    fail_process:     number;
    pkg_price_320:    number;
    mvhash:           string;
    pay_type_sq:      number;
    sqprivilege:      number;
    album_id:         string;
}

export interface SongDto extends SongBaseDto {
    identity:         number;
    inlist:           number;
    topic_url_320:    string;
    topic_url_sq:     string;
    remark:           string;
    has_accompany:    number;
}

export interface NewSongDto extends Omit<SongBaseDto, 'trans_param'> {
    trans_param: {
        roaming_astrict:   number;
        pay_block_tpl:     number;
        musicpack_advance: number;
        cid:               number;
        audio_privilege?:  number;
        display_rate?:     number;
        display?:          number;
    };
    first:             number;
    inlist:            number;
    addtime:           Date;
    recommend_reason:  string;
    has_accompany:     number;
    topic_url_sq:      string;
    remark:            string;
    "320hash":         string;
    "320filesize":     number;
    "320privilege":    number;
    topic_url_320:     string;
    isfirst:           number;
}

export interface NewSongResponseDto {
  JS_CSS_DATE: number
  kg_domain: string
  data: NewSongDto[]
  banner: any[]
}
export interface AuthorDto {
  author_id: string
  author_name: string
  avatar: string
  sizable_avatar: string
  is_publish: string
}
export interface SongPlayingInfoDto {
  hash: string
  timelength: number
  filesize: number
  audio_name: string
  have_album: number
  album_name: string
  album_id: string
  img: string
  have_mv: number
  video_id: number
  author_name: string
  song_name: string
  lyrics: string
  author_id: string
  privilege: number
  privilege2: string
  play_url: string
  authors: AuthorDto[]
  bitrate: number
}
export interface SongLyricResponseDto {
  status: number
  err_code: number
  data: SongPlayingInfoDto
}