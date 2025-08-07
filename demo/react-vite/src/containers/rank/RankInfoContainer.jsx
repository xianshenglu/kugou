import React, { Component } from 'react'
import RankInfo from '../../components/rank/RankInfo'
import { connect } from 'react-redux'
import { fetchRankInfoIfNeeded } from '../../redux/actions/rankInfo'

class RankInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      match: {
        params: { id }
      }
    } = this.props
    dispatch(fetchRankInfoIfNeeded(id))
  }
  render() {
    return <RankInfo {...this.props} />
  }
}

const mapStateToProps = ({ rankInfo: { songsData, listInfo } }) => ({
  songsData,
  listInfo
})
const mapDispatchToProps = null

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankInfoContainer)
