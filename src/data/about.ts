import type { LucideIcon } from "lucide-react";
import { Briefcase, FileText, KeyRound, UserRound } from "lucide-react";

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export const ABOUT_PARAGRAPHS = [
  "Welcome to Rishee Technology Services Limited, your trusted partner in managing and safeguarding your digital assets from the ever-evolving landscape of cyber threats. As a leading IT services company based in London, Ontario, we specialize in providing cutting-edge cyber security solutions to organizations of all sizes and industries.",
  "With a team of highly skilled experts and state-of-the-art technologies, and serving clients across many various industries, we strive to protect your business from potential data breaches, cyber attacks, and malicious intrusions, allowing you to focus on what matters most — your core operations and growth.",
  "At Rishee Technology Services Limited, we are committed to ensuring the confidentiality, integrity, and availability of your critical information, ensuring you have the peace of mind that your digital environment remains resilient and secure.",
] as const;

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    number: "01",
    title: "Expert Team",
    description:
      "Our highly skilled professionals bring a wealth of knowledge and experience to the table, ensuring your business receives top-notch IT services and cyber security solutions.",
    icon: UserRound,
  },
  {
    number: "02",
    title: "Tailored Solutions",
    description:
      "We understand that every business is unique. Our solutions are customized to fit your specific requirements, enabling you to achieve your goals effectively.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Cutting-Edge Technology",
    description:
      "Stay ahead of the curve with our use of the latest technologies and best industry practices, ensuring your business stays competitive in the digital landscape.",
    icon: Briefcase,
  },
  {
    number: "04",
    title: "Trusted Partner",
    description:
      "Our track record of successful projects and satisfied clients makes us a reliable and trustworthy partner for all your IT and cyber security needs.",
    icon: KeyRound,
  },
];

export const ABOUT_CTA_DESCRIPTION =
  "Rishee Technology Services Limited enables your organization to gain a competitive advantage by focusing on your business goals instead of being in the mire of cyber security and IT environment management. Contact Rishee Technology Services Limited today to discover how we deliver the best solutions.";
