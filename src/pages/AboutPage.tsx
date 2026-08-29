import { ABOUT_CTA_DESCRIPTION } from "../data/about";
import { SITE } from "../data/site";
import { AboutContent } from "../components/sections/AboutContent";
import { CtaSection } from "../components/sections/CtaSection";
import { PageHero } from "../components/sections/PageHero";
import { WhyChooseUs } from "../WhyChooseUs";
import type { PageEntry } from "../types/page";

export function AboutPage() {
  return (
    <div className="site-about">
      <PageHero
        label={SITE.name}
        title={`About ${SITE.name}`}
        subtitle="Your IT Security & Support Systems Experts"
      />
      <AboutContent />
      <WhyChooseUs />
      <CtaSection description={ABOUT_CTA_DESCRIPTION} />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/about",
  meta: {
    title: "About Rishee Technology Services Limited",
    description:
      "Your IT Security & Support Systems Experts. Trusted partner for cyber security solutions across Canada and the USA.",
    keywords: [
      "about",
      "company",
      "team",
      "it experts",
      "cyber security",
      "london ontario",
    ],
    type: "page",
  },
  Component: AboutPage,
};
