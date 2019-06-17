import { BASE_ORIGIN, KU_GOU_ORIGIN } from './origin'

export const getSongInfo = {
  method: 'GET',
  url: BASE_ORIGIN + '/app/i/getSongInfo.php'
}

export const getSongLyric = {
  method: 'GET',
  url: KU_GOU_ORIGIN + '/yy/index.php'
}
