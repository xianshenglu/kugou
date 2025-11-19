import type { FC } from 'react'
import NewSongs from './NewSongs'
import { useNewSongsQuery } from './useNewSongsQuery'
import { QueryBoundary } from 'src/shared/components/QueryBoundary'

const NewSongsPage: FC = () => {
  const query = useNewSongsQuery()

  return (
    <QueryBoundary query={query}>
      {(data) => (
        <>
          <link rel="preconnect" href="//imge.kugou.com" />
          <NewSongs songs={data.songs} sliderData={data.sliderData} />
        </>
      )}
    </QueryBoundary>
  )
}

export default NewSongsPage
