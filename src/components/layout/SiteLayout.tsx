import type { ReactNode } from 'react'
import { SearchProvider } from '../../context/SearchContext'
import { SearchModal } from '../search/SearchModal'
import { Footer } from './Footer'
import { GoogleReviewsBadge } from './GoogleReviewsBadge'
import { Header } from './Header'
import { SkipLink } from './SkipLink'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <SearchProvider>
      <SkipLink />
      <Header />
      <main id="content" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
      <GoogleReviewsBadge />
      <SearchModal />
    </SearchProvider>
  )
}
