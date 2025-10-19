import type { FC } from 'react'
import { useEffect } from 'react'
import SingerCategories from '../../components/singer/SingerCategories'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingerCategoriesIfNeeded } from '../../redux/actions/singerCategories'

const SingerCategoriesContainer: FC = () => {
  const dispatch = useDispatch()
  const singerCategories = useSelector((state: any) => state.singerCategories)

  useEffect(() => {
    dispatch(fetchSingerCategoriesIfNeeded())
  }, [])

  return <SingerCategories {...singerCategories} />
}

export default SingerCategoriesContainer
