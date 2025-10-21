import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMemoizedFn } from 'ahooks'
import { fetchKeywordSearchIfNeeded } from '../../redux/actions/keywordSearch'
import { useHotSearch } from './useHotSearch'
import Search from '../../components/search/Search'
import { useLocation, useNavigate } from 'react-router-dom'

const SearchContainer: FC = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  
  const [isKeywordSearchShow, setIsKeywordSearchShow] = useState(false)
  const [isHotSearchShow, setIsHotSearchShow] = useState(false)
  const [keyword, setKeyword] = useState('')
  
  const updateKeywordCallbackRef = useRef<(() => void) | null>(null)

  const {
    data: hotSearchData,
    refetch: hotSearchRefetch
  } = useHotSearch({ enabled: false })
  
  const { keywordSearch } = useSelector((state: any) => ({
    keywordSearch: state.keywordSearch
  }))

  const historyListener = useMemoizedFn(({ search }: { search: string }) => {
    const searchParams = new URLSearchParams(search)
    const keyword = searchParams.get('keyword')
    
    if (keyword === null || keyword === '') {
      hotSearchRefetch();  
      setIsHotSearchShow(true)
      setIsKeywordSearchShow(false)
      setKeyword('')
    } else {
      dispatch(fetchKeywordSearchIfNeeded(keyword))
      setIsHotSearchShow(false)
      setIsKeywordSearchShow(true)
      setKeyword(keyword)
    }
  })

  const updateKeyword = useMemoizedFn((newKeyword: string, callback = () => undefined) => {
    setKeyword(newKeyword)
    updateKeywordCallbackRef.current = callback
  })

  const searchKeyword = useMemoizedFn(() => {
    const { search, pathname } = location
    if (keyword === '') {
      navigate(pathname)
      return
    }
    
    const searchParams = new URLSearchParams(search)
    const isFromKeyword = searchParams.get('keyword') !== null
    searchParams.set('keyword', keyword)

    if (isFromKeyword) {
      navigate(pathname + '?' + searchParams.toString(), { replace: true })
    } else {
      navigate(pathname + '?' + searchParams.toString())
    }
  })

  useEffect(() => {
    historyListener(location)
  }, [location])

  useEffect(() => {
    if (updateKeywordCallbackRef.current) {
      updateKeywordCallbackRef.current()
      updateKeywordCallbackRef.current = null
    }
  }, [keyword])

  const otherProps = {
    isKeywordSearchShow,
    isHotSearchShow,
    keyword,
    searchKeyword,
    updateKeyword,
    hotSearch: hotSearchData,
    keywordSearch
  }

  return <Search {...otherProps} />
}

export default SearchContainer
