import type { FC } from 'react'
import classNames from 'classnames'
import styles from './SongList.module.less'
import AppList from '../public/AppList'

interface SongListProps {
  songList: {
    name: string;
    popularity: number;
  }[];
}

const SongList: FC<SongListProps> = ({ songList }) => {
  const getChildren = ({ name, popularity }: { name: string; popularity: number }) => {
    return (
      <div className={styles.SongList__info}>
        <div className={styles.SongList__name}>{name}</div>
        <div className={styles.SongList__star}>
          <svg className={classNames('icon', styles.SongList__icon)} aria-hidden="true">
            <use xlinkHref="#icon-music" />
          </svg>
          <span className={styles.SongList__popularity}>{popularity}</span>
        </div>
      </div>
    )
  }

  return (
    <AppList data={songList as any} render={getChildren} className={styles.SongList} />
  )
}

export default SongList
