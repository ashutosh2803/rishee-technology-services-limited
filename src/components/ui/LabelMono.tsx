import type { ReactNode } from "react";

interface LabelMonoProps {
  children: ReactNode;
  className?: string;
}

export function LabelMono({ children, className = "" }: LabelMonoProps) {
  return (
    <p
      className={`label-mono flex items-center gap-2 text-[var(--accent-hi)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-px w-6 bg-[var(--accent)] align-middle"
      />
      {children}
    </p>
  );
}
