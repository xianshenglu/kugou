import type { FC } from 'react'
import { useState, useEffect, useRef } from 'react'
import { useMemoizedFn } from 'ahooks'
import { useHotSearch } from './useHotSearch'
import { useKeywordSearch } from './useKeywordSearch'
import Search from './Search'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

const SearchContainer: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams();
  
  const [isKeywordSearchShow, setIsKeywordSearchShow] = useState(false)
  const [isHotSearchShow, setIsHotSearchShow] = useState(false)
  const [keyword, setKeyword] = useState('')
  
  const updateKeywordCallbackRef = useRef<(() => void) | null>(null)

  const {
    data: hotSearchData,
    refetch: hotSearchRefetch
  } = useHotSearch({ enabled: false })

  const {
    data: keywordSearchData,
    refetch: keywordSearchRefetch
  } = useKeywordSearch({ keyword: searchParams.get('keyword') || '', enabled: false })

  const historyListener = useMemoizedFn(({ search }: { search: string }) => {
    const searchParams = new URLSearchParams(search)
    const keyword = searchParams.get('keyword')
    
    if (keyword === null || keyword === '') {
      hotSearchRefetch();  
      setIsHotSearchShow(true)
      setIsKeywordSearchShow(false)
      setKeyword('')
    } else {
      keywordSearchRefetch()
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
    keywordSearch: keywordSearchData
  }

  return <Search {...otherProps} />
}

export default SearchContainer
