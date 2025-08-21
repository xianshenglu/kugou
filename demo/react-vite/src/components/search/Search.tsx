import { Component, Fragment } from 'react'
import classNames from 'classnames'
import styles from './Search.module.less'
import AppMusicList from '../public/AppMusicList'
import { isEnterKey } from '../../assets/js/utils'

interface SearchProps {
  isKeywordSearchShow: boolean;
  isHotSearchShow: boolean;
  keyword: string;
  updateKeyword(...args: unknown[]): unknown;
  searchKeyword(...args: unknown[]): unknown;
  hotSearch: {
    list: {
      keyword: string;
    }[];
  };
  keywordSearch: {
    list: unknown[];
    total: number;
  };
}

class Search extends Component<SearchProps> {
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
        <div className={styles.Search__container}>
          <form className={styles.Search__form} onSubmit={e => e.preventDefault()}>
            <input
              type="text"
              placeholder="歌手/歌名/拼音"
              className={styles.Search__keyword}
              value={keyword}
              onChange={e => updateKeyword(e.target.value)}
              onKeyUp={e => (isEnterKey(e) ? searchKeyword() : undefined)}
            />
            <button
              className={classNames(styles.Search__btn, {
                [styles['Search__btn--active']]: isKeywordSearchShow
              })}
              type="button"
              onClick={searchKeyword}
            >
              搜索
            </button>
          </form>
          <div className={classNames({ hidden: !isHotSearchShow })}>
            <h6 className={styles.Search__type}>最近热门</h6>
            <ul>
              {hotList.map(list => (
                <li
                  className={classNames(styles.Search__item, 'main_border_bottom')}
                  key={list.keyword}
                  onClick={e => updateKeyword(list.keyword, searchKeyword)}
                >
                  {list.keyword}
                </li>
              ))}
            </ul>
          </div>
          <div className={classNames({ hidden: !isKeywordSearchShow })}>
            <div className={styles.Search__count}>共有{total}条结果</div>
            <AppMusicList data={songs} className={styles.Search__resultList} />
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Search
