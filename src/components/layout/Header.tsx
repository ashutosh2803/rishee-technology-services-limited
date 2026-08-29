import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mail, Menu, Phone, Search } from "lucide-react";
import { useSearch } from "../../context/SearchContext";
import { NAV_ITEMS } from "../../data/navigation";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { MobileMenu } from "./MobileMenu";
import { NavDropdown } from "./NavDropdown";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { openSearch } = useSearch();

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
          <Link
            className="shrink-0 max-w-[11.5rem] sm:max-w-[16rem]"
            aria-label={`${SITE.name} — home`}
            to="/"
          >
            <span className="block text-[length:var(--fs-sm)] leading-snug font-semibold tracking-tight text-[var(--ink-1)] sm:text-[length:var(--fs-base)]">
              {SITE.name}
            </span>
          </Link>

          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-8"
          >
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
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `flex items-center gap-1 py-8 font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] font-medium uppercase tracking-[var(--tr-label)] transition-colors duration-[var(--dur-1)] hover:text-[var(--ink-1)] ${
                        isActive ? "text-[var(--ink-1)]" : "text-[var(--ink-2)]"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </div>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              aria-label="Search"
              onClick={openSearch}
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
  );
}
