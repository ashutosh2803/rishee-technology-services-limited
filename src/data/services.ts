import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Cpu,
  RefreshCw,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export interface ServiceLink {
  label: string;
  href: string;
}

export interface ServiceCard {
  number: string;
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  links: ServiceLink[];
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    number: "01",
    title: "Cyber Security",
    href: "/cyber-security",
    description:
      "Audits, monitoring, managed firewalls, and staff training that keep your data and systems protected as threats change.",
    icon: ShieldCheck,
    links: [
      { label: "Cyber Security Audits", href: "/cyber-security-audits" },
      {
        label: "Security Operations Centre",
        href: "/security-operations-centre-soc",
      },
      { label: "Managed Firewall", href: "/managed-firewall" },
      { label: "Detection & Response", href: "/managed-detection-response" },
      { label: "Email Phishing Security", href: "/email-phishing-security" },
      { label: "Dark Web Monitoring", href: "/dark-web-monitoring" },
    ],
  },
  {
    number: "02",
    title: "Disaster Recovery",
    href: "/disaster-recovery-and-business-continuity",
    description:
      "Backups for your servers, devices, Microsoft 365 and Google Workspace — with tested restores, so a bad day doesn't become a lost week.",
    icon: RefreshCw,
    links: [
      { label: "Microsoft 365 Backup", href: "/microsoft-365-backup" },
      { label: "Google Workspace Backup", href: "/google-workspace-backup" },
      { label: "Windows Device Backup", href: "/windows-device-backup" },
    ],
  },
  {
    number: "03",
    title: "Cloud Services",
    href: "/cloud-infrastructure-services",
    description:
      "Migration, hosting, and day-to-day management for Microsoft 365, Google Workspace, and your cloud infrastructure.",
    icon: Cloud,
    links: [
      { label: "Cloud Consulting", href: "/cloud-services-consulting" },
      { label: "Cloud Migration Services", href: "/cloud-migration-services" },
      { label: "Microsoft 365 Services", href: "/microsoft-365-services" },
      {
        label: "Google Workspace Services",
        href: "/google-workspace-services",
      },
      {
        label: "Infrastructure as a Service",
        href: "/infrastructure-as-a-service",
      },
      { label: "Colocation", href: "/colocation" },
    ],
  },
  {
    number: "04",
    title: "Managed Services",
    href: "/it-managed-services",
    description:
      "We run your IT — help desk, monitoring, patching, and asset management — so your team can get on with their work.",
    icon: Settings,
    links: [
      {
        label: "Fully Managed IT Services",
        href: "/fully-managed-it-services",
      },
      { label: "Co-Managed IT Services", href: "/co-managed-it-services" },
      { label: "IT Service Desk Support", href: "/it-service-desk-support" },
      { label: "Monitoring & Maintenance", href: "/monitoring-maintenance" },
      { label: "Asset Management", href: "/asset-management" },
    ],
  },
  {
    number: "05",
    title: "IT Projects & Procurement",
    href: "/projects-procurement",
    description:
      "Planning, hardware sourcing, cabling, and implementation, handled start to finish and delivered on schedule.",
    icon: Wrench,
    links: [
      { label: "Hardware Procurement", href: "/hardware-procurement" },
      { label: "Consulting & Planning", href: "/consulting-planning" },
      {
        label: "IT Implementation Projects",
        href: "/it-implementation-projects",
      },
      {
        label: "Cabling & Network Infrastructure",
        href: "/cabling-infrastructure",
      },
    ],
  },
  {
    number: "06",
    title: "AI Security",
    href: "/shadow-ai-ai-governance-services",
    description:
      "Visibility, monitoring, and managed guardrails for safe AI adoption.",
    icon: Cpu,
    links: [
      {
        label: "Shadow AI & AI Governance",
        href: "/shadow-ai-ai-governance-services",
      },
    ],
  },
];
