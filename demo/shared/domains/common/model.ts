// Shared interfaces used across domain models
export const IMG_SIZE__DEFAULT: string = '400'

export interface Pagination {
  total?: number
  page?: number
  pagesize?: number
}

export interface PaginationQuery {
  page?: number
  pagesize?: number
}

export interface APIResponse<T = any> {
  status?: number
  errcode?: number
  data?: T
}

export interface RoutableItem {
  path: string
  title: string
  imgUrl: string
}