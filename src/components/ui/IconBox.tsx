import type { LucideIcon } from "lucide-react";

interface IconBoxProps {
  icon: LucideIcon;
  size?: "sm" | "md";
  className?: string;
}

export function IconBox({
  icon: Icon,
  size = "md",
  className = "",
}: IconBoxProps) {
  const sizeClass =
    size === "sm" ? "size-9 [&>svg]:size-4" : "size-10 [&>svg]:size-5";

  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-[var(--r-sm)] border border-[var(--accent-line)] bg-[var(--accent-dim)] text-[var(--accent)] transition-[border-color,transform] duration-[var(--dur-2)] ease-[var(--curve-spring)] group-hover:scale-105 group-hover:border-[var(--accent)] ${sizeClass} ${className}`}
    >
      <Icon aria-hidden />
    </span>
  );
}
