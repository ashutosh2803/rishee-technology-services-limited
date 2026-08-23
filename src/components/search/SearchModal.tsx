import { useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Search } from 'lucide-react'
import { useSearch } from '../../context/SearchContext'
import { sitePages } from '../../pages'
import { searchPages } from '../../search/searchPages'

export function SearchModal() {
  const { isOpen, closeSearch } = useSearch()
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const inputId = useId()
  const results = searchPages(query, sitePages)
  const hasQuery = query.trim().length > 0

  useEffect(() => {
    if (!isOpen) {
      setQuery('')
      return
    }

    const frame = window.requestAnimationFrame(() => {
      inputRef.current?.focus()
    })

    return () => window.cancelAnimationFrame(frame)
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[min(12vh,7rem)] sm:px-6">
      <button
        type="button"
        aria-label="Close search"
        className="absolute inset-0 bg-[rgba(6,7,8,0.72)] backdrop-blur-md"
        onClick={closeSearch}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${inputId}-label`}
        className="site-header relative z-10 w-full max-w-[40rem] overflow-hidden rounded-[var(--r-sm)] border border-[var(--line-strong)] bg-[var(--surface-1)] shadow-[0_32px_80px_-24px_rgba(0,0,0,0.85)]"
      >
        <div className="flex items-center gap-3 border-b border-[var(--line)] px-4 py-3 sm:px-5">
          <Search className="size-4 shrink-0 text-[var(--ink-3)]" aria-hidden />
          <label htmlFor={inputId} id={`${inputId}-label`} className="sr-only">
            Search pages and blog posts
          </label>
          <input
            ref={inputRef}
            id={inputId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search pages, blog posts..."
            autoComplete="off"
            className="min-w-0 flex-1 bg-transparent text-[length:var(--fs-base)] text-[var(--ink-1)] outline-none placeholder:text-[var(--ink-3)]"
          />
          <kbd className="hidden shrink-0 rounded-[var(--r-xs)] border border-[var(--line-strong)] bg-[var(--surface-2)] px-2 py-1 font-[family-name:var(--font-jetbrains)] text-[0.65rem] tracking-[0.08em] text-[var(--ink-3)] sm:inline-block">
            ESC
          </kbd>
        </div>

        <div className="max-h-[min(24rem,50vh)] overflow-y-auto">
          {!hasQuery ? (
            <div className="flex flex-col items-center px-6 py-14 text-center">
              <span className="flex size-12 items-center justify-center rounded-[var(--r-sm)] border border-[var(--accent-line)] bg-[var(--accent-dim)] text-[var(--accent)]">
                <Search className="size-5" aria-hidden />
              </span>
              <p className="mt-6 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                Search this site
              </p>
              <p className="mt-2 max-w-[20rem] text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                Find pages and blog posts by Ark. Start typing above.
              </p>
            </div>
          ) : results.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <p className="text-[length:var(--fs-base)] font-medium text-[var(--ink-1)]">
                No results found
              </p>
              <p className="mt-2 text-[length:var(--fs-sm)] text-[var(--ink-2)]">
                Try a different keyword or browse from the menu.
              </p>
            </div>
          ) : (
            <ul className="divide-y divide-[var(--line-soft)]">
              {results.map((result) => (
                <li key={result.path}>
                  <Link
                    to={result.path}
                    onClick={closeSearch}
                    className="group flex items-start gap-4 px-4 py-4 transition-colors hover:bg-[var(--surface-2)] sm:px-5"
                  >
                    <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--surface-2)] text-[var(--ink-3)] transition-colors group-hover:border-[var(--accent-line)] group-hover:text-[var(--accent)]">
                      <FileText className="size-4" aria-hidden />
                    </span>
                    <span className="min-w-0 text-left">
                      <span className="flex flex-wrap items-center gap-2">
                        <span className="text-[length:var(--fs-base)] font-medium text-[var(--ink-1)] group-hover:text-[var(--accent-hi)]">
                          {result.title}
                        </span>
                        <span className="label-mono text-[var(--ink-3)]">
                          {result.type === 'blog' ? 'Blog' : 'Page'}
                        </span>
                      </span>
                      <span className="mt-1 block text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                        {result.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
