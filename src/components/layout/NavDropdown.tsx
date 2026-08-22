import type { NavItem } from "../../data/navigation";
import { SITE } from "../../data/site";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

interface NavDropdownProps {
  item: NavItem;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function NavDropdown({
  item,
  isOpen,
  onOpen,
  onClose,
}: NavDropdownProps) {
  if (!item.children) return null;

  return (
    <div
      className="relative flex h-full items-center"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        to={item.href}
        className="flex items-center gap-1 py-8 font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] font-medium uppercase tracking-[var(--tr-label)] text-[var(--ink-2)] transition-colors duration-[var(--dur-1)] hover:text-[var(--ink-1)]"
      >
        {item.label}
        <ChevronDown
          className={`size-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          aria-hidden
        />
      </Link>

      <div
        className={`fixed inset-x-0 top-[var(--header-h)] z-30 overflow-hidden border-b border-[var(--line-strong)] border-t-2 border-t-[var(--accent)] bg-[color-mix(in_srgb,var(--surface-2)_86%,transparent)] backdrop-blur-[44px] backdrop-saturate-[1.8] backdrop-brightness-[0.55] shadow-[0_32px_64px_-24px_rgba(0,0,0,0.75)] transition-[opacity,transform] duration-[var(--dur-2)] ease-[var(--curve-entrance)] sm:top-[calc(var(--header-h)+var(--header-utility-h))] ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="ac-container grid gap-0 py-8 lg:grid-cols-[240px_minmax(0,1fr)]">
          <div className="flex flex-col border-r border-[var(--line-soft)] pr-8">
            <p className="text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
              {item.label}
            </p>
            {item.intro && (
              <p className="mt-2 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                {item.intro}
              </p>
            )}
            <Link
              to={item.href}
              className="ac-underline mt-4 inline-flex w-fit items-center gap-2 text-[length:var(--fs-sm)] font-medium text-[var(--accent-hi)]"
            >
              View all
              <span
                aria-hidden
                className="font-[family-name:var(--font-jetbrains)]"
              >
                →
              </span>
            </Link>
            <p
              aria-hidden
              className="mt-auto hidden pt-6 font-[family-name:var(--font-jetbrains)] text-[0.65rem] tracking-[0.12em] text-[var(--ink-3)] lg:block"
            >
              {SITE.coordinates}
            </p>
          </div>

          <ul className="grid content-start gap-px sm:grid-cols-2 lg:pl-8">
            {item.children.map((child, index) => (
              <li key={child.href}>
                <a
                  href={child.href}
                  className="group relative flex gap-3 rounded-[var(--r-xs)] p-3.5 transition-colors duration-[var(--dur-1)] hover:bg-[color-mix(in_srgb,var(--accent)_5%,var(--surface-3))]"
                >
                  <span className="min-w-0 flex-1">
                    <span className="flex items-baseline justify-between gap-3">
                      <span className="text-[length:var(--fs-sm)] font-medium text-[var(--ink-1)]">
                        {child.label}
                      </span>
                      <span
                        aria-hidden
                        className="font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] text-[var(--ink-3)] transition-colors group-hover:text-[var(--accent-hi)]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
