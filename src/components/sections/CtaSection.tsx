import type { CSSProperties } from 'react'
import { Mail, Phone } from 'lucide-react'
import { SITE } from '../../data/site'
import { Button } from '../ui/Button'
import { LabelMono } from '../ui/LabelMono'

interface CtaSectionProps {
  description?: string
}

export function CtaSection({ description }: CtaSectionProps) {
  return (
    <section
      className="relative overflow-hidden border-y border-[var(--line)]"
      style={
        {
          '--ink-1': '#ffffff',
          '--ink-2': 'rgba(255,255,255,0.86)',
          '--ink-3': 'rgba(255,255,255,0.72)',
          '--accent': '#ffffff',
          '--accent-hi': '#ffffff',
          '--accent-line': 'rgba(255,255,255,0.45)',
          '--accent-dim': 'rgba(255,255,255,0.16)',
          '--line': 'rgba(255,255,255,0.24)',
          '--line-soft': 'rgba(255,255,255,0.16)',
          '--line-strong': 'rgba(255,255,255,0.4)',
          '--accent-fill': '#ffffff',
          '--ink-on-accent': '#c1272e',
          '--surface-1': 'transparent',
          '--surface-2': 'rgba(255,255,255,0.08)',
          '--surface-3': 'rgba(255,255,255,0.14)',
          backgroundColor: '#cb2028',
        } as CSSProperties
      }
    >
      <div className="ac-reveal relative" style={{ '--i': 0 } as CSSProperties}>
        <svg aria-hidden className="absolute inset-0 h-full w-full opacity-30">
          <defs>
            <pattern id="cta-dots" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="var(--line)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-dots)" />
        </svg>

        <div
          aria-hidden
          className="absolute -bottom-24 left-1/2 h-48 w-[130%] -translate-x-1/2 rounded-[100%] bg-[var(--accent)]/14 blur-[80px]"
        />

        <span
          aria-hidden
          className="absolute top-4 left-4 size-3 border-t border-l border-[var(--accent-line)]"
        />
        <span
          aria-hidden
          className="absolute top-4 right-4 size-3 border-t border-r border-[var(--accent-line)]"
        />
        <span
          aria-hidden
          className="absolute bottom-4 left-4 size-3 border-b border-l border-[var(--accent-line)]"
        />
        <span
          aria-hidden
          className="absolute right-4 bottom-4 size-3 border-r border-b border-[var(--accent-line)]"
        />

        <div className="ac-container relative grid items-center gap-10 py-[var(--section-default)] md:grid-cols-12">
          <div className="md:col-span-7">
            <LabelMono>Next step</LabelMono>
            <h2
              className="mt-5 text-[length:var(--fs-display)] leading-[var(--lh-display)] font-semibold tracking-[var(--tr-display)] text-[var(--ink-1)]"
              style={{ fontVariationSettings: "'wdth' var(--wdth-display)" }}
            >
              Ready to get started?
            </h2>
            {description && (
              <p className="measure mt-5 text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                {description}
              </p>
            )}
          </div>

          <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
            <div className="flex flex-col items-stretch gap-5 md:min-w-[17rem]">
              <Button href="/contact" size="lg" className="w-full">
                Get Started
              </Button>
              <div aria-hidden className="rule-fade" />
              <div className="flex flex-col gap-3">
                <a
                  href={SITE.phoneHref}
                  className="group/c flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-sm)] text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform group-hover/c:scale-105">
                    <Phone className="size-3.5 text-[var(--accent)]" aria-hidden />
                  </span>
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group/c flex items-center gap-3 font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-sm)] text-[var(--ink-2)] transition-colors hover:text-[var(--ink-1)]"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-[var(--r-xs)] border border-[var(--accent-line)] bg-[var(--accent-dim)] transition-transform group-hover/c:scale-105">
                    <Mail className="size-3.5 text-[var(--accent)]" aria-hidden />
                  </span>
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
