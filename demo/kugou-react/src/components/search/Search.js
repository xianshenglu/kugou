import React, { Component, Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import './Search.less'
import AppMusicList from '../public/AppMusicList'
import { isEnterKey } from '../../assets/js/utils'

class Search extends Component {
  render() {
    const {
      isKeywordSearchShow,
      isHotSearchShow,
      keyword,
      updateKeyword,
      searchKeyword,
      hotSearch: { list: hotList },
      keywordSearch: { list: songs, total }
    } = this.props
    return (
      <Fragment>
        <h4 className="main_box_shadow module_title">搜索</h4>
        <div className="Search__container">
          <form className="Search__form" onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="歌手/歌名/拼音"
              className="Search__keyword"
              value={keyword}
              onChange={e => updateKeyword(e.target.value)}
              onKeyUp={e => (isEnterKey(e) ? searchKeyword() : undefined)}
            />
            <button
              className={classNames('Search__btn', {
                'Search__btn--active': isKeywordSearchShow
              })}
              type="button"
              onClick={searchKeyword}
            >
              搜索
            </button>
          </form>
          <div className={classNames({ hidden: !isHotSearchShow })}>
            <h6 className="Search__type">最近热门</h6>
            <ul className="Search__list">
              {hotList.map(list => (
                <li
                  className="Search__item main_border_bottom"
                  key={list.keyword}
                  onClick={e => updateKeyword(list.keyword, searchKeyword)}
                >
                  {list.keyword}
                </li>
              ))}
            </ul>
          </div>
          <div className={classNames({ hidden: !isKeywordSearchShow })}>
            <div className="Search__count">共有{total}条结果</div>
            <AppMusicList data={songs} className="Search__resultList" />
          </div>
        </div>
      </Fragment>
    )
  }
}
Search.propTypes = {
  isKeywordSearchShow: PropTypes.bool.isRequired,
  isHotSearchShow: PropTypes.bool.isRequired,
  keyword: PropTypes.string.isRequired,
  updateKeyword: PropTypes.func.isRequired,
  searchKeyword: PropTypes.func.isRequired,
  hotSearch: PropTypes.shape({
    list: PropTypes.arrayOf(
      PropTypes.shape({ keyword: PropTypes.string.isRequired })
    ).isRequired
  }).isRequired,
  keywordSearch: PropTypes.shape({
    list: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
  }).isRequired
}
export default Search
