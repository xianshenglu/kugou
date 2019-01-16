import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
RankList.propTypes = {
  rankList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
}
export default RankList
