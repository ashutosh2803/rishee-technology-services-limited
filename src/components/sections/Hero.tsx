import { Play } from "lucide-react";
import type { CSSProperties } from "react";
import heroImage from "../../assets/hero.png";
import { SITE } from "../../data/site";
import { Button } from "../ui/Button";
import { LabelMono } from "../ui/LabelMono";

const HIGHLIGHTS = [
  "Businesses of all sizes across Canada and the USA",
  "Enquiries answered within 24 hours on business days",
];

export function Hero() {
  return (
    <section className="hero-section relative -mt-[var(--header-h)] overflow-hidden border-b border-[var(--line-soft)] sm:-mt-[calc(var(--header-h)+var(--header-utility-h))]">
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <svg className="absolute inset-0 h-full w-full opacity-40">
          <defs>
            <pattern
              id="hero-grid"
              width="28"
              height="28"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="var(--line)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[var(--surface-base)]" />
      </div>

      <div
        className="ac-enter pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[62vw]"
        style={{ "--i": 2 } as CSSProperties}
      >
        <div className="relative h-full w-full">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-24 -inset-y-16 bg-[radial-gradient(45%_55%_at_60%_50%,rgba(110,168,220,0.22),rgba(226,59,66,0.1)_55%,transparent_78%)] blur-2xl"
          />
          <div
            className="relative h-full min-h-[22rem] w-full overflow-hidden sm:min-h-[28rem] lg:absolute lg:inset-y-0 lg:min-h-0"
            style={{
              maskImage: "var(--hero-mask)",
              WebkitMaskImage: "var(--hero-mask)",
            }}
          >
            <img
              alt="Secure cloud connecting protected infrastructure nodes across a network"
              src={heroImage}
              onError={(event) => {
                event.currentTarget.src = SITE.heroImage;
              }}
              className="absolute inset-0 h-full w-full object-cover object-center lg:object-left"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[var(--surface-base)]/82 lg:hidden"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[calc(var(--header-h)+4rem)] bg-gradient-to-b from-[var(--surface-base)] via-[color-mix(in_srgb,var(--surface-base)_78%,transparent)] to-transparent sm:h-[calc(var(--header-h)+var(--header-utility-h)+4rem)]"
      />

      <div className="ac-container relative grid min-h-[inherit] items-center gap-12 pt-[calc(var(--section-hero)+var(--header-h))] pb-[var(--section-default)] sm:pt-[calc(var(--section-hero)+var(--header-h)+var(--header-utility-h))] lg:grid-cols-12">
        <div className="relative z-10 max-w-[52rem] lg:col-span-6">
          <div className="ac-enter" style={{ "--i": 0 } as CSSProperties}>
            <LabelMono>
              IT Security &amp; Support Services · London, Ontario
            </LabelMono>
          </div>

          <div className="ac-enter" style={{ "--i": 1 } as CSSProperties}>
            <h1
              className="mt-6 text-[length:var(--fs-display)] leading-[var(--lh-display)] font-semibold tracking-[var(--tr-display)] text-[var(--ink-1)]"
              style={{ fontVariationSettings: "'wdth' var(--wdth-display)" }}
            >
              Welcome to {SITE.name}
              <span aria-hidden className="ac-cursor" />
            </h1>
          </div>

          <div className="ac-enter" style={{ "--i": 2 } as CSSProperties}>
            <p className="measure mt-6 text-[length:var(--fs-lg)] leading-[var(--lh-body)] text-[var(--ink-2)]">
              {SITE.name} is an IT services and cyber security company in
              London, Ontario. We keep businesses across Canada and the USA
              protected, supported, and running without drama.
            </p>
          </div>

          <div className="ac-enter" style={{ "--i": 3 } as CSSProperties}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/contact" size="lg">
                Get Started
              </Button>
              <a
                href="/it-managed-services"
                className="ac-btn ac-btn-outline-hero h-[3.25rem] px-7 text-[length:var(--fs-lg)]"
              >
                <Play className="size-3.5 fill-current" aria-hidden />
                Explore services
              </a>
            </div>
          </div>

          <div className="ac-enter" style={{ "--i": 4 } as CSSProperties}>
            <ul className="mt-14 flex flex-wrap gap-x-8 gap-y-2">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="label-mono flex items-center gap-2 normal-case tracking-[0.08em] text-[var(--ink-2)]"
                >
                  <span
                    aria-hidden
                    className="size-1.5 shrink-0 rounded-[1px] bg-[var(--accent)]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute right-6 bottom-10 hidden items-center gap-3 lg:flex"
        >
          <span className="h-px w-10 bg-[var(--line-strong)]" />
          <span className="font-[family-name:var(--font-jetbrains)] text-[0.6875rem] tracking-[0.14em] text-[var(--ink-3)]">
            {SITE.coordinates}
          </span>
        </div>
      </div>
    </section>
  );
}
