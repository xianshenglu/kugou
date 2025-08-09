import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHotSearchIfNeeded } from '../../redux/actions/hotSearch'
import { fetchKeywordSearchIfNeeded } from '../../redux/actions/keywordSearch'
import Search from '../../components/search/Search'
import { useLocation, useNavigate } from 'react-router-dom'

class SearchContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isKeywordSearchShow: false,
      isHotSearchShow: false,
      keyword: ''
    }
    this.searchKeyword = this.searchKeyword.bind(this)
    this.updateKeyword = this.updateKeyword.bind(this)
  }
  componentDidMount() {
    const { location } = this.props
    this.historyListener(location)
    // console.log('mount')
  }
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.historyListener(this.props.location)
    }
  }
  historyListener({ search }) {
    search = new URLSearchParams(search)
    const keyword = search.get('keyword')
    const { dispatch } = this.props
    if (keyword === null || keyword === '') {
      dispatch(fetchHotSearchIfNeeded())
      this.setState({
        isHotSearchShow: true,
        isKeywordSearchShow: false,
        keyword: ''
      })
    } else {
      dispatch(fetchKeywordSearchIfNeeded(keyword))
      this.setState({
        isHotSearchShow: false,
        isKeywordSearchShow: true,
        keyword
      })
    }
  }
  updateKeyword(keyword, callback = () => undefined) {
    this.setState({ keyword }, callback)
  }
  searchKeyword() {
    let {
      location: { search, pathname },
      navigate
    } = this.props
    const { keyword: curKeyword } = this.state
    if (curKeyword === '') {
      navigate(pathname)
      return
    }
    search = new URLSearchParams(search)
    const isFromKeyword = search.get('keyword') !== null
    search.set('keyword', curKeyword)

    if (isFromKeyword) {
      navigate(pathname + '?' + search.toString(), { replace: true })
    } else {
      navigate(pathname + '?' + search.toString())
    }
  }
  render() {
    const { ...otherState } = this.state
    const { searchKeyword, updateKeyword } = this
    const otherProps = { ...otherState, searchKeyword, updateKeyword }
    return <Search {...this.props} {...otherProps} />
  }
}

const mapStateToProps = ({ hotSearch, keywordSearch }) => ({
  hotSearch,
  keywordSearch
})
const mapDispatchToProps = null
function SearchContainerWrapper(props) {
  const location = useLocation()
  const navigate = useNavigate()
  return <SearchContainer {...props} location={location} navigate={navigate} />
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainerWrapper)
