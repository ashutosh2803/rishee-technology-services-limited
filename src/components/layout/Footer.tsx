import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FOOTER_COMPANY_LINKS,
  FOOTER_SERVICE_LINKS,
} from "../../data/navigation";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-header relative mt-auto overflow-hidden border-t border-[var(--line)] bg-[var(--surface-1)] text-[var(--ink-1)]">
      <div className="h-px bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/30 to-transparent" />

      <svg aria-hidden className="absolute inset-0 h-full w-full opacity-20">
        <defs>
          <pattern
            id="footer-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="var(--line)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dots)" />
      </svg>

      <div className="ac-container relative grid gap-12 pt-16 pb-10 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col md:col-span-6 lg:col-span-4">
          <Link className="flex items-start" to="/">
            <img
              alt={SITE.name}
              src={SITE.logo}
              width={909}
              height={150}
              loading="lazy"
              className="h-auto w-full max-w-[190px]"
            />
          </Link>
          <p className="mt-6 max-w-xs text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)]">
            IT security and support systems for businesses across Canada and the
            USA.
          </p>
          <Button href="/contact" variant="outline" className="mt-7 w-fit">
            Book a Consultation
          </Button>
        </div>

        <div className="md:col-span-6 lg:col-span-3 lg:col-start-5">
          <p className="label-mono">Contact Us</p>
          <ul className="mt-5 space-y-4 text-sm text-[var(--ink-2)]">
            <li className="group flex gap-3">
              <ContactIcon icon={MapPin} />
              <a
                href={SITE.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-[var(--ink-1)]"
              >
                {SITE.address.line1}
                <br />
                {SITE.address.line2}
              </a>
            </li>
            <li className="group flex gap-3">
              <ContactIcon icon={Clock} />
              <span>Enquiries answered within 24 hours on business days</span>
            </li>
            <li className="group flex gap-3">
              <ContactIcon icon={Phone} />
              <a
                href={SITE.phoneHref}
                className="transition-colors hover:text-[var(--ink-1)]"
              >
                {SITE.phone}
              </a>
            </li>
            <li className="group flex gap-3">
              <ContactIcon icon={Mail} />
              <a
                href={`mailto:${SITE.email}`}
                className="break-all transition-colors hover:text-[var(--ink-1)]"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:col-start-9">
          <FooterNav
            title="Company"
            links={FOOTER_COMPANY_LINKS}
            ariaLabel="Company"
          />
          <FooterNav
            title="Services"
            links={FOOTER_SERVICE_LINKS}
            ariaLabel="Services"
          />
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none relative -mt-6 -mb-3 overflow-hidden select-none"
      >
        <p
          className="ac-container text-[clamp(3.5rem,10vw,8rem)] leading-[0.82] font-bold tracking-[-0.04em] whitespace-nowrap text-[var(--ghost-ink)]"
          style={{ fontVariationSettings: "'wdth' 92" }}
        >
          ARK CYBER
        </p>
      </div>

      <div className="relative border-t border-[var(--line-soft)]">
        <div className="ac-container flex flex-col items-center justify-between gap-3 py-6 text-center text-xs text-[var(--ink-3)] sm:flex-row sm:text-left">
          <span>
            © {year} Ark Cyber IT Security &amp; Service Systems. All rights
            reserved.
          </span>
          <span>
            Built by{" "}
            <a
              href="https://cecile.co"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
            >
              Cecile
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function ContactIcon({ icon: Icon }: { icon: typeof MapPin }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform duration-[var(--dur-2)] group-hover:scale-105">
      <Icon className="size-3.5 text-[var(--accent)]" aria-hidden />
    </span>
  );
}

function FooterNav({
  title,
  links,
  ariaLabel,
}: {
  title: string;
  links: { label: string; href: string }[];
  ariaLabel: string;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="label-mono">{title}</p>
      <nav aria-label={ariaLabel} className="flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={link.label}
            to={link.href}
            className="ac-underline w-fit text-sm text-[var(--ink-3)] transition-colors duration-[var(--dur-1)] hover:text-[var(--ink-1)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
