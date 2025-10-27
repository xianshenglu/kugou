import type { FC } from 'react'
import styles from './RankList.module.less'
import AppList from '../public/AppList'
import type { RankItemDto } from '@shared/domains/rank/dto';

interface RankListProps {
  rankList: RankItemDto[];
}

const RankList: FC<RankListProps> = ({ rankList }) => {
  const getChildren = ({ name }: { name: string }) => {
    return <div className={styles.RankList__name}>{name}</div>
  }

  return (
    <AppList data={rankList as any} render={getChildren} className={styles.RankList} />
  )
}

export default RankList
