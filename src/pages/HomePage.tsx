import { CtaSection } from "../components/sections/CtaSection";
import { Hero } from "../components/sections/Hero";
import { Methodology } from "../components/sections/Methodology";
import { Partners } from "../components/sections/Partners";
import { Reviews } from "../components/sections/Reviews";
import { ServicesOverview } from "../components/sections/ServicesOverview";
import type { PageEntry } from "../types/page";

export function HomePage() {
  return (
    <div className="site-home">
      <Hero />
      <ServicesOverview />
      <Methodology />
      <Partners />
      <Reviews />
      <CtaSection />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/",
  meta: {
    title: "Welcome to Ark Cyber",
    description:
      "IT services and cyber security in London, Ontario. We keep businesses across Canada and the USA protected, supported, and running without drama.",
    keywords: [
      "home",
      "it security",
      "managed services",
      "cyber security",
      "london ontario",
      "ark cyber",
    ],
    type: "page",
  },
  Component: HomePage,
};
