import type { ComponentType } from 'react'

export interface PageMeta {
  title: string
  description: string
  keywords?: string[]
  /** Distinguishes pages from future blog posts in search results */
  type?: 'page' | 'blog'
}

export interface PageEntry {
  path: string
  meta: PageMeta
  Component: ComponentType
}

export interface PageModule {
  pageEntry?: PageEntry
}
