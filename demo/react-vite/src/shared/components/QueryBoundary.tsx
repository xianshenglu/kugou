import type { ReactNode } from 'react'
import type { UseQueryResult } from '@tanstack/react-query'
import { Loading } from './Loading'

interface QueryBoundaryProps<T> {
  query: UseQueryResult<T>
  errorComponent?: ReactNode | ((error: unknown) => ReactNode)
  loadingComponent?: ReactNode
  children: (data: T) => ReactNode
}

export function QueryBoundary<T>({ 
  query, 
  errorComponent,
  loadingComponent = <Loading />,
  children 
}: QueryBoundaryProps<T>) {
  const { data, error, isLoading } = query

  if (isLoading) {
    return loadingComponent
  }

  if (error) {
    if (errorComponent) {
      return <>{typeof errorComponent === 'function' ? errorComponent(error) : errorComponent}</>
    }
    return <div>Error loading data</div>
  }

  if (!data) return null

  return <>{children(data)}</>
}

