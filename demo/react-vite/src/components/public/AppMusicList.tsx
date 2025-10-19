import type { FC } from 'react'
import { useDispatch } from 'react-redux'
import styles from './AppMusicList.module.less'
import { fetchMusicIfNeeded, switchPlayerMed } from '../../redux/actions/player'
import { player } from '../../constants/router'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'

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
  const dispatch = useDispatch()
  const location = useLocation()
  const { pathname } = location

  return (
    <ul className={styles.AppMusicList}>
      {data.map((music, index) => (
        <li
          className={classNames(styles.AppMusicList__item, 'main_border_bottom')}
          key={music.hash}
          onClick={(e) => {
            dispatch(fetchMusicIfNeeded(music.hash, index, data))
            dispatch(switchPlayerMed(pathname !== player))
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
