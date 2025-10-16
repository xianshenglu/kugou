// Shared interfaces used across domain models

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

export interface ImageRef {
  imgurl?: string
}

export interface Timestamped {
  timestamp?: number
}

export type ID = number | string

export interface MediaItem {
  audio_id?: number
  hash?: string
  filename?: string
  duration?: number
  extname?: string
}

export interface RoutableItem {
  path: string
  title: string
  imgUrl: string
}