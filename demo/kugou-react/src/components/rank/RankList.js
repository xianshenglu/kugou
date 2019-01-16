import React, { Component } from 'react'
import './RankList.less'
import AppList from '../public/AppList'
class RankList extends Component {
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
