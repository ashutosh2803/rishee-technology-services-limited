import { useState } from 'react'
import { Mail, Menu, Phone, Search } from 'lucide-react'
import { NAV_ITEMS } from '../../data/navigation'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { MobileMenu } from './MobileMenu'
import { NavDropdown } from './NavDropdown'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  return (
    <>
      <header className="site-header sticky top-0 z-40 border-b border-[var(--line)] frost backdrop-blur-xl backdrop-saturate-150 transition-[background-color,border-color,backdrop-filter] duration-[var(--dur-3)]">
        <div className="hidden overflow-hidden sm:block max-h-[var(--header-utility-h)] opacity-100">
          <div className="ac-container flex h-[calc(var(--header-utility-h)-1px)] items-center justify-end gap-6 border-b border-[var(--line-soft)]">
            <a
              href={SITE.phoneHref}
              className="group flex items-center gap-2 text-[length:var(--fs-xs)] tracking-[0.04em] whitespace-nowrap text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform duration-[var(--dur-2)] group-hover:scale-105">
                <Phone className="size-2.5 text-[var(--accent)]" aria-hidden />
              </span>
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="group flex items-center gap-2 text-[length:var(--fs-xs)] tracking-[0.04em] whitespace-nowrap text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
            >
              <span className="flex size-5 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform duration-[var(--dur-2)] group-hover:scale-105">
                <Mail className="size-2.5 text-[var(--accent)]" aria-hidden />
              </span>
              {SITE.email}
            </a>
          </div>
        </div>

        <div className="ac-container flex h-[var(--header-h)] items-center justify-between gap-6">
          <a className="shrink-0" aria-label="Ark Cyber — home" href="/">
            <img
              alt={SITE.name}
              src={SITE.logo}
              width={909}
              height={150}
              className="h-auto w-full max-w-[132px] transition-[max-width] duration-[var(--dur-3)] sm:max-w-[170px]"
            />
          </a>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={item}
                  isOpen={activeDropdown === item.label}
                  onOpen={() => setActiveDropdown(item.label)}
                  onClose={() => setActiveDropdown(null)}
                />
              ) : (
                <div key={item.label} className="flex h-full items-center">
                  <a
                    href={item.href}
                    className="flex items-center gap-1 py-8 font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] font-medium uppercase tracking-[var(--tr-label)] text-[var(--ink-2)] transition-colors duration-[var(--dur-1)] hover:text-[var(--ink-1)]"
                  >
                    {item.label}
                  </a>
                </div>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              className="p-2 text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
            >
              <Search className="size-5" aria-hidden />
            </button>
            <Button href="/contact" size="sm" className="hidden sm:inline-flex">
              Contact Us
            </Button>
            <div className="lg:hidden">
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
                className="-mr-2 p-2 text-[var(--ink-1)] transition-colors hover:text-[var(--accent-hi)]"
              >
                <Menu className="size-6" aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
