import type { CSSProperties } from "react";
import { LabelMono } from "../ui/LabelMono";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero relative -mt-[var(--header-h)] overflow-hidden border-b border-[var(--line-soft)] sm:-mt-[calc(var(--header-h)+var(--header-utility-h))]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id="page-hero-grid"
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
            <radialGradient id="page-hero-glow" cx="72%" cy="38%" r="55%">
              <stop offset="0%" stopColor="rgba(110,168,220,0.28)" />
              <stop offset="45%" stopColor="rgba(110,168,220,0.08)" />
              <stop offset="100%" stopColor="rgba(110,168,220,0)" />
            </radialGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#page-hero-grid)" />
          <rect width="100%" height="100%" fill="url(#page-hero-glow)" />
          <g
            stroke="rgba(110,168,220,0.35)"
            strokeWidth="1"
            fill="none"
            opacity="0.6"
          >
            <line x1="18%" y1="22%" x2="42%" y2="38%" />
            <line x1="42%" y1="38%" x2="68%" y2="28%" />
            <line x1="68%" y1="28%" x2="88%" y2="52%" />
            <line x1="42%" y1="38%" x2="55%" y2="62%" />
            <line x1="55%" y1="62%" x2="78%" y2="72%" />
          </g>
          <g fill="rgba(110,168,220,0.85)">
            <circle cx="18%" cy="22%" r="3" />
            <circle cx="42%" cy="38%" r="4" />
            <circle cx="68%" cy="28%" r="3" />
            <circle cx="88%" cy="52%" r="2.5" />
            <circle cx="55%" cy="62%" r="3" />
            <circle cx="78%" cy="72%" r="2.5" />
          </g>
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[var(--surface-base)]" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[calc(var(--header-h)+4rem)] bg-gradient-to-b from-[var(--surface-base)] via-[color-mix(in_srgb,var(--surface-base)_78%,transparent)] to-transparent sm:h-[calc(var(--header-h)+var(--header-utility-h)+4rem)]"
      />

      <div className="ac-container relative z-10 pt-[calc(var(--section-hero)+var(--header-h))] pb-[var(--section-default)] sm:pt-[calc(var(--section-hero)+var(--header-h)+var(--header-utility-h))]">
        <div
          className="ac-enter max-w-[44rem]"
          style={{ "--i": 0 } as CSSProperties}
        >
          <LabelMono>{label}</LabelMono>
          <h1
            className="mt-6 text-[length:var(--fs-display)] leading-[var(--lh-display)] font-semibold tracking-[var(--tr-display)] text-[var(--ink-1)]"
            style={{ fontVariationSettings: "'wdth' var(--wdth-display)" }}
          >
            {title}
          </h1>
          <p className="mt-5 text-[length:var(--fs-lg)] leading-[var(--lh-body)] text-[var(--ink-2)]">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
