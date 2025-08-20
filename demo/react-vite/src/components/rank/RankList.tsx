import React, { Component } from 'react'
import styles from './RankList.module.less'
import AppList from '../public/AppList'

interface RankListProps {
  rankList: {
    name: string;
  }[];
}

class RankList extends Component<RankListProps> {
  getChildren({ name }: { name: string }) {
    return <div className={styles.RankList__name}>{name}</div>
  }
  render() {
    const { rankList } = this.props
    return (
      <AppList data={rankList as any} render={this.getChildren} className={styles.RankList} />
    )
  }
}
export default RankList
