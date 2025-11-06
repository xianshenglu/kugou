import type { FC } from 'react'
import styles from './AppMusicList.module.less'
import { player } from '../constants/router'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import usePlayerStore from 'src/shared/player/usePlayerStore'

interface AppMusicListProps {
  data: {
    hash: string;
    filename: string;
  }[];
  renderMusicSequence?(index: number): React.ReactNode;
  className?: string;
  'test-id'?: string;
}

const AppMusicList: FC<AppMusicListProps> = ({ 
  data, 
  renderMusicSequence = () => null,
  className = '',
  'test-id': testId
}) => {
  const location = useLocation()
  const { pathname } = location
  const { fetchMusicIfNeeded, switchPlayerMed } = usePlayerStore()
  return (
    <ul className={classNames(styles.AppMusicList, className)} test-id={testId}>
      {data.map((music, index) => (
        <li
          className={classNames(styles.AppMusicList__item, 'main_border_bottom')}
          key={music.hash}
          test-id={`music-item-${music.hash}`}
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
