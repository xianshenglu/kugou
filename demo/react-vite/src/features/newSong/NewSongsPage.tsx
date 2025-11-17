import type { FC } from 'react'
import NewSongs from './NewSongs'
import { useNewSongsQuery } from './useNewSongsQuery'
import { Loading } from 'src/shared/components/Loading'

const NewSongsPage: FC = () => {
  const { data, error, isLoading } = useNewSongsQuery()

  if (isLoading) return <Loading />
  if (error) return <div>Error loading new songs</div>
  if (!data) return null

  return (
    <>
      <link rel="preconnect" href="//imge.kugou.com" />
      <NewSongs songs={data.songs} sliderData={data.sliderData} />
    </>
  )
}

export default NewSongsPage
