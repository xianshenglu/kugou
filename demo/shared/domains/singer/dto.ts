export interface SingerCategoryDto {
  classid: number
  classname: string
  imgurl: string
}

export interface SingerSummaryDto {
  singerid: number
  singername: string
  imgurl: string
}

export interface SingerInfoDto extends SingerSummaryDto {
  intro: string
  songcount: number
  albumcount: number
}

export interface SingerListResponseDto {
  classid: number
  classname: string
  singers: {
    total: number
    list: { info: SingerSummaryDto[] }
  }
}

export interface SingerCategoryListResponseDto {
  list: SingerCategoryDto[]
}
export interface SingerSongDto {
    pay_type_320:     number;
    m4afilesize:      number;
    price_sq:         number;
    filesize:         number;
    bitrate:          number;
    identity:         number;
    price:            number;
    inlist:           number;
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
    topic_url_320:    string;
    trans_param:      {
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
    has_accompany:    number;
    fail_process_sq:  number;
    "320filesize":    number;
    rp_publish:       number;
    duration:         number;
    topic_url_sq:     string;
    sqhash:           string;
    remark:           string;
    "320privilege":   number;
    fail_process:     number;
    lyrics_info:      any[];
    pkg_price_320:    number;
    mvhash:           string;
    pay_type_sq:      number;
    publish_date:     Date;
    sqprivilege:      number;
    album_id:         string;
    composer_info:    any[];
}
export interface SingerInfoResponseDto {
  info: SingerInfoDto
  songs: { total: number; list: SingerSongDto[] }
}
