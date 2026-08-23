import type { CSSProperties } from "react";
import { AI_SECURITY_SERVICES } from "../../data/aiSecurity";
import { IconBox } from "../ui/IconBox";

export function AiSecurityServices() {
  return (
    <section className="border-y border-[var(--line-soft)] bg-[var(--surface-1)] py-[var(--section-default)]">
      <div className="ac-container">
        <div className="ac-reveal grid gap-px overflow-hidden rounded-[var(--r-sm)] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {AI_SECURITY_SERVICES.map((service, index) => (
            <article
              key={service.number}
              className="group relative bg-[var(--surface-2)] p-8 transition-colors duration-[var(--dur-2)] hover:bg-[color-mix(in_srgb,var(--accent)_4%,var(--surface-2))] md:p-10"
              style={{ "--i": index } as CSSProperties}
            >
              <div className="flex items-start justify-between gap-4">
                <IconBox icon={service.icon} />
                <span className="label-mono text-[var(--ink-3)] transition-colors group-hover:text-[var(--accent-hi)]">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-6 text-[length:var(--fs-h3)] font-semibold text-[var(--ink-1)]">
                {service.title}
              </h3>
              <p className="mt-3 text-[length:var(--fs-sm)] leading-[var(--lh-body)] text-[var(--ink-2)]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
