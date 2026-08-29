import type { CSSProperties } from "react";
import { REVIEWS } from "../../data/reviews";
import { SITE } from "../../data/site";
import { LabelMono } from "../ui/LabelMono";

export function Reviews() {
  return (
    <section
      className="py-[var(--section-default)] bg-[var(--surface-base)]"
      data-theme="light"
    >
      <div className="ac-container">
        <div
          className="ac-reveal grid gap-4 md:grid-cols-12 md:items-end"
          style={{ "--i": 0 } as CSSProperties}
        >
          <div className="md:col-span-7">
            <LabelMono>Client reviews</LabelMono>
            <h2 className="mt-4 text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
              What our clients say
            </h2>
          </div>
          {SITE.googleReviewsUrl ? (
            <div className="md:col-span-4 md:col-start-9 md:justify-self-end">
              <a
                href={SITE.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ac-underline inline-flex items-center gap-2 text-[length:var(--fs-sm)] font-medium text-[var(--ink-1)]"
              >
                Read all 25 reviews on Google
                <span
                  aria-hidden
                  className="font-[family-name:var(--font-jetbrains)] text-[var(--ink-3)]"
                >
                  →
                </span>
              </a>
            </div>
          ) : null}
        </div>

        <div className="ac-reveal mt-12" style={{ "--i": 0 } as CSSProperties}>
          <div className="grid gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)] md:grid-cols-3">
            {REVIEWS.map((review) => (
              <figure
                key={review.author}
                className="relative flex flex-col overflow-hidden bg-[var(--surface-1)] p-8"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-3 right-4 font-[family-name:var(--font-jetbrains)] text-[6rem] leading-none font-bold text-[var(--ghost-ink)] select-none"
                >
                  &rdquo;
                </span>
                <span
                  aria-label="5 out of 5 stars"
                  className="text-[0.8rem] tracking-[0.12em] text-[#FBBC04]"
                >
                  ★★★★★
                </span>
                <blockquote className="mt-5 flex-1 text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-baseline justify-between gap-4 border-t border-[var(--line-soft)] pt-4">
                  <span className="font-medium text-[var(--ink-1)]">
                    {review.author}
                  </span>
                  <span className="label-mono normal-case tracking-[0.08em]">
                    Google review
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
