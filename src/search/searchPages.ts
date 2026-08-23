import type { PageEntry } from '../types/page'

export interface SearchResult {
  path: string
  title: string
  description: string
  type: 'page' | 'blog'
  score: number
}

function scorePage(page: PageEntry, terms: string[]): number {
  const title = page.meta.title.toLowerCase()
  const description = page.meta.description.toLowerCase()
  const path = page.path.toLowerCase()
  const keywords = (page.meta.keywords ?? []).map((k) => k.toLowerCase())

  return terms.reduce((total, term) => {
    if (title.includes(term)) return total + 12
    if (keywords.some((keyword) => keyword.includes(term))) return total + 8
    if (description.includes(term)) return total + 5
    if (path.includes(term)) return total + 3
    return total
  }, 0)
}

export function searchPages(query: string, pages: PageEntry[]): SearchResult[] {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  return pages
    .map((page) => ({
      path: page.path,
      title: page.meta.title,
      description: page.meta.description,
      type: page.meta.type ?? 'page',
      score: scorePage(page, terms),
    }))
    .filter((result) => result.score > 0)
    .sort((a, b) => b.score - a.score)
}
