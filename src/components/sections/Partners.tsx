import { PARTNERS } from '../../data/partners'
import { LabelMono } from '../ui/LabelMono'

function PartnerLogo({ name, src }: { name: string; src: string }) {
  return (
    <li className="partner-card flex h-16 w-36 shrink-0 items-center justify-center rounded-[var(--r-xs)] bg-white px-5 py-3 transition-transform duration-[var(--dur-2)] hover:scale-105">
      <img alt={name} src={src} loading="lazy" className="max-h-10 w-auto object-contain" />
    </li>
  )
}

export function Partners() {
  return (
    <section
      className="border-y border-[var(--line-soft)] bg-[var(--surface-base)] py-[var(--section-tight)]"
      data-theme="light"
    >
      <div className="ac-container">
        <LabelMono>Partners</LabelMono>
        <h2 className="mt-3 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
          Our Solution Partners
        </h2>
      </div>

      <div className="ac-marquee mt-8" role="group" aria-label="Solution partners">
        <div className="ac-marquee-inner">
          <ul className="flex shrink-0 items-center gap-4 pr-4">
            {PARTNERS.map((partner) => (
              <PartnerLogo key={partner.name} {...partner} />
            ))}
          </ul>
          <ul aria-hidden className="flex shrink-0 items-center gap-4 pr-4">
            {PARTNERS.map((partner) => (
              <PartnerLogo key={`${partner.name}-dup`} {...partner} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
