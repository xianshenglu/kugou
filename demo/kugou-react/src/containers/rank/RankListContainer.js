import React, { Component } from 'react'
import RankList from '../../components/rank/RankList'
import { connect } from 'react-redux'
import { fetchRankListIfNeeded } from '../../redux/actions/rankList'
import { FETCH_RANK_LIST_IF_NEEDED } from '../../constants/actionType'

class RankListContainer extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchRankListIfNeeded(FETCH_RANK_LIST_IF_NEEDED))
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
