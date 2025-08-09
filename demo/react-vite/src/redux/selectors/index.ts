import { createSelector } from 'reselect'
export const getFormattedLyrics = createSelector(
  [lyric => lyric],
  lyric => {
    let lyrics = lyric.split(/\n/)
    lyrics.pop()
    return lyrics.map(text => {
      let arr = text.replace('[', '').split(']')
      let time = arr[0]
      let min = time.split(':')[0]
      let sec = time.split(':')[1].split('.')[0]
      let millisecond = time.split(':')[1].split('.')[1]
      return {
        millisecond: min * 60 * 1000 + sec * 1000 + Number(millisecond),
        text: arr[1].trim().replace(/(男[:：]\s*)|(女[:：]\s*)/, '')
      }
    })
  }
)
export const getLyricsMillisecond = createSelector(
  [lyrics => lyrics],
  lyrics => lyrics.map(o => o.millisecond)
)
