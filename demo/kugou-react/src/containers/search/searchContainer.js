import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchHotSearchIfNeeded } from '../../redux/actions/hotSearch'
import { fetchKeywordSearchIfNeeded } from '../../redux/actions/keywordSearch'
import Search from '../../components/search/Search'

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
    this.historyListener = this.historyListener.bind(this)
  }
  componentDidMount() {
    const {
      history,
      history: { location }
    } = this.props
    this.historyListener(location)
    this.unlistenHistory = history.listen(this.historyListener)
    console.log('mount')
  }
  componentWillUnmount() {
    console.log('unmount')
    this.unlistenHistory()
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
      history
    } = this.props
    const { keyword: curKeyword } = this.state
    if (curKeyword === '') {
      history.push(pathname)
      return
    }
    search = new URLSearchParams(search)
    const isFromKeyword = search.get('keyword') !== null
    search.set('keyword', curKeyword)

    if (isFromKeyword) {
      history.replace(pathname + '?' + search.toString())
    } else {
      history.push(pathname + '?' + search.toString())
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchContainer)
