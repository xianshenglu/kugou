import React, { Component } from 'react'
import RankList from '../../components/rank/RankList'
import { connect } from 'react-redux'
import { fetchRankListIfNeeded } from '../../redux/actions/rankList'

class RankListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchRankListIfNeeded())
  }
  render() {
    return <RankList {...this.props} />
  }
}

const mapStateToProps = ({ rankList }) => rankList
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankListContainer)
