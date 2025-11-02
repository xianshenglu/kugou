import type { FC } from 'react'
import classNames from 'classnames'
import styles from './SongList.module.less'
import AppList from '../../components/AppList'
import type { PlaylistSummary } from '@shared/domains/playlist/model';

interface SongListProps {
  songList: PlaylistSummary[];
}

const SongList: FC<SongListProps> = ({ songList }) => {
  const getChildren = ({ title, popularity }: { title: string; popularity: number }) => {
    return (
      <div className={styles.SongList__info}>
        <div className={styles.SongList__name}>{title}</div>
        <div >
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
