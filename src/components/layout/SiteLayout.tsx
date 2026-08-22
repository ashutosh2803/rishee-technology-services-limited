import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { GoogleReviewsBadge } from './GoogleReviewsBadge'
import { Header } from './Header'
import { SkipLink } from './SkipLink'

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="content" className="flex flex-1 flex-col">
        {children}
      </main>
      <Footer />
      <GoogleReviewsBadge />
    </>
  )
}
