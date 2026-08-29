import { SITE } from "../../data/site";

export function GoogleReviewsBadge() {
  if (!SITE.googleReviewsUrl) {
    return null;
  }

  return (
    <aside
      aria-label="Google reviews rating"
      className="fixed right-4 bottom-4 z-40 print:hidden"
    >
      <div className="site-header relative flex items-center gap-3 rounded-none border border-[var(--line-strong)] bg-[var(--surface-2)] py-3 pr-4 pl-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)]">
        <a
          href={SITE.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Rated 5.0 stars on Google from 25 reviews — read our most recent reviews"
          className="flex items-center gap-3 after:absolute after:inset-0 focus-visible:outline-none"
        >
          <span className="flex size-9 shrink-0 items-center justify-center bg-white">
            <GoogleIcon />
          </span>
          <span>
            <span className="flex items-center gap-1.5">
              <span className="font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-base)] font-medium text-[var(--ink-1)]">
                5.0
              </span>
              <span
                aria-hidden
                className="text-[0.7rem] tracking-[0.1em] text-[#FBBC04]"
              >
                ★★★★★
              </span>
            </span>
            <span className="mt-0.5 block font-[family-name:var(--font-jetbrains)] text-[length:var(--fs-label)] tracking-[0.06em] text-[var(--ink-3)]">
              25 Google reviews
            </span>
          </span>
        </a>
      </div>
    </aside>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.27c0-.85-.08-1.66-.22-2.45H12v4.64h6.46a5.53 5.53 0 0 1-2.4 3.63v3h3.87c2.27-2.09 3.57-5.17 3.57-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.96-1.07 7.94-2.91l-3.87-3c-1.08.72-2.45 1.15-4.07 1.15-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A12 12 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC04"
        d="M5.27 14.28a7.2 7.2 0 0 1 0-4.56V6.63H1.29a12 12 0 0 0 0 10.74l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.76c1.76 0 3.34.6 4.59 1.8l3.44-3.44A11.98 11.98 0 0 0 1.29 6.63l3.98 3.09C6.22 6.87 8.87 4.76 12 4.76Z"
      />
    </svg>
  );
}
