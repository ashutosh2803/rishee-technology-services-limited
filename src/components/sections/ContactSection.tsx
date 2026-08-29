import type { CSSProperties } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_ADDRESS_LINE, CONTACT_NOTE } from "../../data/contact";
import { SITE } from "../../data/site";
import { ContactForm } from "./ContactForm";
import { LabelMono } from "../ui/LabelMono";

export function ContactSection() {
  return (
    <section className="contact-section relative -mt-[var(--header-h)] flex-1 overflow-hidden border-b border-[var(--line-soft)] sm:-mt-[calc(var(--header-h)+var(--header-utility-h))]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id="contact-grid"
              width="44"
              height="44"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 44 0 L 0 0 0 44"
                fill="none"
                stroke="var(--decor-grid-line)"
                strokeWidth="1"
              />
            </pattern>
            <radialGradient id="contact-glow" cx="68%" cy="32%" r="58%">
              <stop offset="0%" stopColor="rgba(110,168,220,0.22)" />
              <stop offset="50%" stopColor="rgba(110,168,220,0.06)" />
              <stop offset="100%" stopColor="rgba(110,168,220,0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
          <rect width="100%" height="100%" fill="url(#contact-glow)" />
          <g
            stroke="rgba(110,168,220,0.3)"
            strokeWidth="1"
            fill="none"
            opacity="0.55"
          >
            <line x1="12%" y1="18%" x2="38%" y2="34%" />
            <line x1="38%" y1="34%" x2="62%" y2="24%" />
            <line x1="62%" y1="24%" x2="84%" y2="46%" />
            <line x1="38%" y1="34%" x2="48%" y2="58%" />
            <line x1="48%" y1="58%" x2="72%" y2="68%" />
          </g>
          <g fill="rgba(110,168,220,0.8)">
            <circle cx="12%" cy="18%" r="2.5" />
            <circle cx="38%" cy="34%" r="3.5" />
            <circle cx="62%" cy="24%" r="2.5" />
            <circle cx="84%" cy="46%" r="2" />
            <circle cx="48%" cy="58%" r="2.5" />
            <circle cx="72%" cy="68%" r="2" />
          </g>
          <g fill="rgba(226,59,66,0.65)">
            <circle cx="22%" cy="72%" r="2" />
            <circle cx="58%" cy="82%" r="1.5" />
            <circle cx="90%" cy="22%" r="2" />
          </g>
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[calc(var(--header-h)+4rem)] bg-gradient-to-b from-[var(--surface-base)] via-[color-mix(in_srgb,var(--surface-base)_78%,transparent)] to-transparent sm:h-[calc(var(--header-h)+var(--header-utility-h)+4rem)]"
      />

      <div className="ac-container relative z-10 grid gap-12 py-[calc(var(--section-default)+var(--header-h))] pb-[var(--section-default)] sm:py-[calc(var(--section-default)+var(--header-h)+var(--header-utility-h))] lg:grid-cols-12 lg:items-start lg:gap-16">
        <div className="lg:col-span-5">
          <div className="ac-enter" style={{ "--i": 0 } as CSSProperties}>
            <LabelMono>{SITE.name}</LabelMono>
            <h1
              className="mt-6 text-[length:var(--fs-display)] leading-[var(--lh-display)] font-semibold tracking-[var(--tr-display)] text-[var(--ink-1)]"
              style={{ fontVariationSettings: "'wdth' var(--wdth-display)" }}
            >
              Contact {SITE.name}
            </h1>
            <p className="mt-5 text-[length:var(--fs-lg)] leading-[var(--lh-body)] text-[var(--ink-2)]">
              For enquiries or to book a no-obligation consultation
            </p>
          </div>

          <ul
            className="ac-enter mt-10 space-y-5"
            style={{ "--i": 1 } as CSSProperties}
          >
            <ContactDetail
              icon={Mail}
              href={`mailto:${SITE.email}`}
              label={SITE.email}
            />
            <ContactDetail
              icon={Phone}
              href={SITE.phoneHref}
              label={SITE.phone}
            />
            <ContactDetail
              icon={MapPin}
              href={SITE.address.mapsUrl}
              label={CONTACT_ADDRESS_LINE}
              external
            />
            <ContactDetail icon={Clock} label={CONTACT_NOTE} />
          </ul>
        </div>

        <div
          className="ac-enter lg:col-span-6 lg:col-start-7"
          style={{ "--i": 2 } as CSSProperties}
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <>
      <span className="flex size-9 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform duration-[var(--dur-2)] group-hover:scale-105">
        <Icon className="size-4 text-[var(--accent)]" aria-hidden />
      </span>
      <span className="pt-1.5 text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)] transition-colors group-hover:text-[var(--ink-1)]">
        {label}
      </span>
    </>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="group flex gap-4"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className="group flex gap-4">{content}</li>;
}
