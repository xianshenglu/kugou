import { createSelector } from 'reselect'
export const getFormattedLyrics = createSelector(
  [lyric => lyric],
  (lyric: string) => {
    const lyrics = lyric.split(/\n/)
    lyrics.pop()
    return lyrics.map(text => {
      const arr = text.replace('[', '').split(']')
      const time = arr[0]
      const min = time.split(':')[0]
      const sec = time.split(':')[1].split('.')[0]
      const millisecond = time.split(':')[1].split('.')[1]
      return {
        millisecond: Number(min) * 60 * 1000 + Number(sec) * 1000 + Number(millisecond),
        text: arr[1].trim().replace(/(男[:：]\s*)|(女[:：]\s*)/, '')
      }
    })
  }
)