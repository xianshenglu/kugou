import type { FC } from 'react'
import styles from './RankList.module.less'
import AppList from '../../components/AppList'
import type { RankItemDto } from '@shared/domains/rank/dto';

interface RankListProps {
  rankList: RankItemDto[];
}

const RankList: FC<RankListProps> = ({ rankList }) => {
  const getChildren = ({ title }: { title: string }) => {
    return <div className={styles.RankList__name}>{title}</div>
  }

  return (
    <AppList data={rankList as any} render={getChildren} className={styles.RankList} />
  )
}

export default RankList
