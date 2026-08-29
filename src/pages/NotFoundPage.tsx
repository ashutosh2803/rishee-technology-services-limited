import { useEffect } from "react";
import { Button } from "../components/ui/Button";
import { LabelMono } from "../components/ui/LabelMono";
import { SITE } from "../data/site";

export function NotFoundPage() {
  useEffect(() => {
    document.title = `Page Not Found | ${SITE.name}`;
  }, []);

  return (
    <div className="site-not-found flex flex-1 flex-col items-center justify-center px-4 py-[var(--section-default)] text-center">
      <div className="ac-enter max-w-[36rem]">
        <LabelMono>Error · Not Found</LabelMono>

        <p
          aria-hidden
          className="mt-8 text-[clamp(5.5rem,18vw,11rem)] leading-none font-semibold tracking-[-0.04em] text-[var(--ink-1)]"
        >
          404
        </p>

        <h1 className="mt-6 text-[length:var(--fs-h2)] font-semibold tracking-[var(--tr-h2)] text-[var(--ink-1)]">
          This page could not be found.
        </h1>

        <p className="mt-4 text-[length:var(--fs-base)] leading-[var(--lh-body)] text-[var(--ink-2)]">
          The address may have changed when the site was rebuilt. The homepage
          lists every service, or use search in the header.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" size="lg">
            Go to the homepage
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}
