import type { FC } from 'react'
import styles from './AppMusicList.module.less'
import { player } from '../../constants/router'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import usePlayerStore from 'src/stores/usePlayerStore'

interface AppMusicListProps {
  data: {
    hash: string;
    filename: string;
  }[];
  renderMusicSequence?(...args: unknown[]): unknown;
}

const AppMusicList: FC<AppMusicListProps> = ({ 
  data, 
  renderMusicSequence = () => undefined 
}) => {
  const location = useLocation()
  const { pathname } = location
  const { fetchMusicIfNeeded, switchPlayerMed } = usePlayerStore()
  return (
    <ul className={styles.AppMusicList}>
      {data.map((music, index) => (
        <li
          className={classNames(styles.AppMusicList__item, 'main_border_bottom')}
          key={music.hash}
          onClick={(e) => {
            fetchMusicIfNeeded(music.hash, index, data as any)
            switchPlayerMed(pathname !== player)
          }}
        >
          <div className={styles.AppMusicList__info}>
            {renderMusicSequence(index)}
            <div className={styles.AppMusicList__name}>{music.filename}</div>
          </div>
          <button
            className={styles.AppMusicList__download}
            onClick={(e) => e.stopPropagation()}
          >
            <svg className="icon" aria-hidden="true">
              <use xlinkHref="#icon-download" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}

export default AppMusicList
