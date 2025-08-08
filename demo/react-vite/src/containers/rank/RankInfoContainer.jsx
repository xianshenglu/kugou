import React, { Component } from 'react'
import RankInfo from '../../components/rank/RankInfo'
import { connect } from 'react-redux'
import { fetchRankInfoIfNeeded } from '../../redux/actions/rankInfo'
import { useParams } from 'react-router-dom'

class RankInfoContainer extends Component {
  componentDidMount() {
    const {
      dispatch,
      params: { id }
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

function RankInfoContainerWrapper(props) {
  const params = useParams()
  return <RankInfoContainer {...props} params={params} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RankInfoContainerWrapper)
