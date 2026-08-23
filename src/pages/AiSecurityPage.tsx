import { AiSecurityContent } from "../components/sections/AiSecurityContent";
import { AiSecurityServices } from "../components/sections/AiSecurityServices";
import { CtaSection } from "../components/sections/CtaSection";
import { PageHero } from "../components/sections/PageHero";
import { WhyChooseUs } from "../WhyChooseUs";
import {
  AI_GOVERNANCE_ITEMS,
  AI_SECURITY_CTA_DESCRIPTION,
} from "../data/aiSecurity";
import type { PageEntry } from "../types/page";

export function AiSecurityPage() {
  return (
    <div className="site-ai-security">
      <PageHero
        label="Ark Cyber"
        title="Shadow AI & AI Governance Services"
        subtitle="Visibility, monitoring, and managed guardrails for safe AI adoption"
      />
      <AiSecurityContent />
      <AiSecurityServices />
      <WhyChooseUs
        title="Why Choose Ark Cyber for AI Governance?"
        items={AI_GOVERNANCE_ITEMS}
        cta={{ href: "/contact", title: "Ready to get started?" }}
      />
      <CtaSection description={AI_SECURITY_CTA_DESCRIPTION} />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/shadow-ai-ai-governance-services",
  meta: {
    title: "Shadow AI & AI Governance Services",
    description:
      "Visibility, monitoring, and managed guardrails for safe AI adoption. Shadow AI monitoring, data exposure controls, and ongoing governance.",
    keywords: [
      "ai security",
      "shadow ai",
      "ai governance",
      "chatgpt",
      "copilot",
      "guardrails",
      "policy",
      "monitoring",
    ],
    type: "page",
  },
  Component: AiSecurityPage,
};
