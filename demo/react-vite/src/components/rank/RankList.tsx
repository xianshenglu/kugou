import React, { Component } from 'react'
import './RankList.less'
import AppList from '../public/AppList'

interface RankListProps {
  rankList: {
    name: string;
  }[];
}

class RankList extends Component<RankListProps> {
  getChildren({ name }) {
    return <div className="RankList__name">{name}</div>
  }
  render() {
    const { rankList } = this.props
    return (
      <AppList data={rankList} render={this.getChildren} className="RankList" />
    )
  }
}
export default RankList
