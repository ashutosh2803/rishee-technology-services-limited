import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { WHY_CHOOSE_ITEMS, type WhyChooseItem } from "./data/about";
import { IconBox } from "./components/ui/IconBox";
import { LabelMono } from "./components/ui/LabelMono";

const GRID_MARKS = [
  { x1: 120, y1: 180, stroke: "#e23b42" },
  { x1: 340, y1: 420, stroke: "#6ea8dc" },
  { x1: 780, y1: 260, stroke: "#3b4145" },
  { x1: 1020, y1: 520, stroke: "#e23b42" },
];

interface WhyChooseCta {
  href: string;
  title: string;
  label?: string;
}

interface WhyChooseUsProps {
  title?: string;
  items?: WhyChooseItem[];
  cta?: WhyChooseCta;
}

export function WhyChooseUs({
  title = "Why Choose Ark Cyber?",
  items = WHY_CHOOSE_ITEMS,
  cta,
}: WhyChooseUsProps) {
  return (
    <section className="relative border-y border-[var(--line-soft)] bg-[var(--surface-1)] py-[var(--section-default)]">
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full select-none"
        style={{
          maskImage:
            "radial-gradient(130% 115% at 50% 42%, black 40%, transparent 92%)",
        }}
      >
        <defs>
          <pattern
            id="why-choose-grid"
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
        </defs>
        <rect width="100%" height="100%" fill="url(#why-choose-grid)" />
        {GRID_MARKS.map((mark, index) => (
          <g key={index} stroke={mark.stroke} strokeWidth="1.25" opacity="0.75">
            <line x1={mark.x1} y1={mark.y1} x2={mark.x1 + 12} y2={mark.y1} />
            <line
              x1={mark.x1 + 6}
              y1={mark.y1 - 6}
              x2={mark.x1 + 6}
              y2={mark.y1 + 6}
            />
          </g>
        ))}
      </svg>

      <div className="ac-container relative">
        <h2 className="ac-reveal text-center text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
          {title}
        </h2>

        <div className="ac-reveal mt-12 grid gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.number}
              className="group relative bg-[var(--surface-2)] p-8 transition-colors duration-[var(--dur-2)] hover:bg-[color-mix(in_srgb,var(--accent)_4%,var(--surface-2))] md:p-10"
              style={{ "--i": index } as CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={item.icon} />
                <span className="label-mono text-[var(--ink-3)] transition-colors group-hover:text-[var(--accent-hi)]">
                  {item.number}
                </span>
              </div>
              <h3 className="mt-6 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                {item.title}
              </h3>
              <p className="mt-3 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                {item.description}
              </p>
            </article>
          ))}

          {cta && (
            <article
              className="group relative flex flex-col justify-between bg-[var(--surface-2)] p-8 transition-colors duration-[var(--dur-2)] hover:bg-[color-mix(in_srgb,var(--accent)_4%,var(--surface-2))] md:p-10"
              style={{ "--i": items.length } as CSSProperties}
            >
              <div>
                <LabelMono>{cta.label ?? "Next Step"}</LabelMono>
                <h3 className="mt-6 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                  {cta.title}
                </h3>
              </div>
              <Link
                to={cta.href}
                className="ac-underline mt-8 inline-flex w-fit items-center gap-2 text-[length:var(--fs-sm)] font-medium text-[var(--accent-hi)]"
              >
                Get Started
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-jetbrains)]"
                >
                  →
                </span>
              </Link>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
