import type { CSSProperties } from "react";
import { ABOUT_PARAGRAPHS } from "../../data/about";
import { SITE } from "../../data/site";

export function AboutContent() {
  return (
    <section
      className="py-[var(--section-default)] bg-[var(--surface-base)]"
      data-theme="light"
    >
      <div className="ac-container">
        <div
          className="ac-reveal grid gap-10 md:grid-cols-12 md:gap-16"
          style={{ "--i": 0 } as CSSProperties}
        >
          <div className="md:col-span-4 lg:col-span-5">
            <h2 className="text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
              About {SITE.name}
            </h2>
          </div>

          <div className="space-y-6 md:col-span-8 lg:col-span-7">
            {ABOUT_PARAGRAPHS.map((paragraph) => (
              <p
                key={paragraph.slice(0, 32)}
                className="text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
