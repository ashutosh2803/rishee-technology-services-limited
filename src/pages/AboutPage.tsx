import { ABOUT_CTA_DESCRIPTION } from "../data/about";
import { AboutContent } from "../components/sections/AboutContent";
import { CtaSection } from "../components/sections/CtaSection";
import { PageHero } from "../components/sections/PageHero";
import { WhyChooseUs } from "../WhyChooseUs";

export function AboutPage() {
  return (
    <div className="site-about">
      <PageHero
        label="Ark Cyber"
        title="About Ark Cyber"
        subtitle="Your IT Security & Support Systems Experts"
      />
      <AboutContent />
      <WhyChooseUs />
      <CtaSection description={ABOUT_CTA_DESCRIPTION} />
    </div>
  );
}
