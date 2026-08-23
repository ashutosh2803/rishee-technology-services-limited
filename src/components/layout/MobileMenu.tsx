import { useEffect, useState, type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'
import { NAV_ITEMS } from '../../data/navigation'
import { Button } from '../ui/Button'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <div
        aria-hidden
        className={`fixed inset-0 z-[60] bg-[rgba(6,7,8,0.6)] backdrop-blur-sm transition-opacity duration-[var(--dur-3)] ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`fixed inset-y-0 right-0 z-[61] flex w-full max-w-[22rem] flex-col border-l border-[var(--line-strong)] frost backdrop-blur-xl backdrop-saturate-150 transition-transform duration-[var(--dur-4)] ease-[var(--curve-entrance)] ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--line)] px-6 py-5">
          <span className="label-mono">Menu</span>
          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="-mr-2 flex size-10 items-center justify-center rounded-[var(--r-sm)] text-[var(--ink-3)] transition-colors hover:bg-[var(--surface-3)] hover:text-[var(--ink-1)]"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-6 py-2">
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item.label}
                className="border-b border-[var(--line-soft)]"
                style={{ '--i': index } as CSSProperties}
              >
                <div className="flex items-stretch">
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className="group flex flex-1 items-baseline gap-3 py-4 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)] transition-colors hover:text-[var(--accent-hi)]"
                  >
                    {item.label}
                    <span className="font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] tracking-[var(--tr-label)] text-[var(--accent)]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label} submenu`}
                      aria-expanded={expanded === item.label}
                      onClick={() =>
                        setExpanded(expanded === item.label ? null : item.label)
                      }
                      className="-mr-2 flex w-12 items-center justify-center text-[var(--ink-3)] transition-colors hover:text-[var(--accent-hi)]"
                    >
                      <ChevronDown
                        className={`size-5 transition-transform duration-300 ${
                          expanded === item.label ? 'rotate-180' : ''
                        }`}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>

                {item.children && (
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-[var(--dur-3)] ease-[var(--curve-entrance)] ${
                      expanded === item.label
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <ul className="mb-3 flex flex-col gap-0.5 border-l border-[var(--accent-line)] pl-5">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <span className="block py-2 text-[length:var(--fs-sm)] font-medium text-[var(--ink-2)]">
                              {child.label}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-[var(--line)] bg-[var(--surface-2)] px-6 py-6">
          <div className="flex flex-col gap-3">
            <Button href="/contact" size="lg" className="w-full">
              Book a Consultation
            </Button>
            <Button href="/about" variant="outline" size="lg" className="w-full">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
