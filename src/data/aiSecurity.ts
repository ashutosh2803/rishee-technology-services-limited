import type { LucideIcon } from "lucide-react";
import {
  Bot,
  Building2,
  Eye,
  FileBarChart,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";
import type { WhyChooseItem } from "./about";

export interface AiSecurityService {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const AI_SECURITY_SERVICES: AiSecurityService[] = [
  {
    number: "01",
    title: "Shadow AI Monitoring",
    description:
      "Detect unapproved AI tools, personal AI accounts, browser-based AI, developer assistants, embedded AI features, and emerging AI agents.",
    icon: Bot,
  },
  {
    number: "02",
    title: "AI Data Exposure Monitoring",
    description:
      "Monitor prompts and file uploads for sensitive data like PII, financial records, contracts, and HR documents, so you always know what is leaving your business.",
    icon: ShieldAlert,
  },
  {
    number: "03",
    title: "AI Guardrails & Policy Enforcement",
    description:
      "Set controls that allow, warn, block, or log activity according to your AI policy, all without getting in the way of real work.",
    icon: Shield,
  },
  {
    number: "04",
    title: "Ongoing Managed AI Governance",
    description:
      "We keep monitoring, reporting, tuning policy, and reviewing over time, so AI never turns into another unmanaged risk.",
    icon: RefreshCw,
  },
];

export const AI_SECURITY_PARAGRAPHS = [
  "Shadow AI is the use of AI tools without IT’s knowledge or oversight—personal ChatGPT accounts, files uploaded for summaries, code pasted into assistants, or AI features built into platforms like Microsoft 365, Slack, Grammarly, and Canva.",
  "The issue isn’t AI itself; it’s the lack of visibility into who is using it and what data they’re sharing. Once customer records, contracts, financial information, or passwords are entered into an outside tool, you may lose control over how that data is stored or reused. Because this activity doesn’t look like a typical cyberattack, traditional security tools often miss it.",
  "Rishee Technology Services Limited helps businesses in London, Ontario and across Southwestern Ontario discover where AI is being used, understand what business data may be exposed, and put practical AI guardrails in place. Your team keeps the productivity gains of AI, and your sensitive information stays protected.",
] as const;

export const AI_GOVERNANCE_ITEMS: WhyChooseItem[] = [
  {
    number: "01",
    title: "Visibility First, Controls Second",
    description:
      "Before we put any restrictions in place, we run in monitor-only mode so you can see what is actually happening across your business. Your staff carry on as normal while we build the picture.",
    icon: Eye,
  },
  {
    number: "02",
    title: "Practical Guardrails, Not Blanket Bans",
    description:
      "Block AI outright and people just find workarounds, which makes Shadow AI worse. We help you set policies your team can actually live with, so safe AI use becomes the easy option. And if you already run Microsoft Copilot, keep in mind it only covers one corner of the wider AI landscape.",
    icon: Shield,
  },
  {
    number: "03",
    title: "Business-Readable Reporting",
    description:
      "Your leadership team gets clear reports on AI usage, exposure, and policy triggers, written in plain language rather than raw logs.",
    icon: FileBarChart,
  },
  {
    number: "04",
    title: "Built for Small & Mid-Sized Businesses",
    description:
      "SMBs are often more exposed than enterprises: AI adoption happens informally and IT teams are lean. Our services fit professional services firms, accounting and legal offices, healthcare organizations, nonprofits, manufacturers, and any business with sensitive data or cyber insurance requirements.",
    icon: Building2,
  },
  {
    number: "05",
    title: "Part of a Complete Security Strategy",
    description:
      "Shadow AI monitoring fits alongside the rest of our cyber security work, including our Security Operations Centre, Detection and Response, Security Awareness Training, and Dark Web Monitoring, so nothing falls through the gaps.",
    icon: ShieldCheck,
  },
];

export const AI_SECURITY_CTA_DESCRIPTION =
  "Talk with Rishee Technology Services Limited about Shadow AI monitoring and practical AI governance for your business. We will walk through where AI is already in use and which guardrails make sense for your team.";
