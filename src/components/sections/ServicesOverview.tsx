import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { SERVICE_CARDS } from "../../data/services";
import { IconBox } from "../ui/IconBox";
import { LabelMono } from "../ui/LabelMono";

export function ServicesOverview() {
  return (
    <section
      className="py-[var(--section-default)] bg-[var(--surface-base)]"
      data-theme="light"
    >
      <div className="ac-container">
        <div className="grid gap-6 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <LabelMono>Services overview</LabelMono>
            <h2 className="mt-4 text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
              Ark Cyber Services Overview
            </h2>
          </div>
        </div>

        <div className="ac-reveal mt-12" style={{ "--i": 0 } as CSSProperties}>
          <div className="grid gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICE_CARDS.map((service, index) => (
              <article
                key={service.title}
                className="service-card group relative bg-[var(--surface-1)] p-8 transition-colors duration-[var(--dur-2)]"
              >
                <div style={{ "--i": index } as CSSProperties}>
                  <div className="flex items-start justify-between gap-4">
                    <IconBox icon={service.icon} />
                    <span className="label-mono text-[var(--ink-3)] transition-colors group-hover:text-[var(--accent-hi)]">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                    <Link
                      to={service.href}
                      className="after:absolute after:inset-0 focus-visible:outline-none"
                    >
                      {service.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                    {service.description}
                  </p>

                  <div className="service-card-links grid grid-rows-[0fr] transition-[grid-template-rows] duration-[680ms] ease-[var(--curve-entrance)] group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                    <ul className="service-card-links-list min-h-0 overflow-hidden opacity-0 transition-opacity delay-150 duration-[420ms] group-hover:opacity-100 group-focus-within:opacity-100">
                      <li aria-hidden className="pt-5" />
                      {service.links.map((link) => (
                        <li
                          key={link.href}
                          className="border-t border-[var(--line-soft)]"
                        >
                          <Link
                            to={link.href}
                            className="relative z-10 flex items-center justify-between gap-3 py-2.5 text-[length:var(--fs-sm)] text-[var(--ink-2)] transition-colors hover:text-[var(--accent-hi)]"
                          >
                            {link.label}
                            <span
                              aria-hidden
                              className="font-[family-name:var(--font-jetbrains)] text-[var(--ink-3)]"
                            >
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
