import { ContactSection } from "../components/sections/ContactSection";
import type { PageEntry } from "../types/page";

export function ContactPage() {
  return (
    <div className="site-contact flex flex-1 flex-col">
      <ContactSection />
    </div>
  );
}

export const pageEntry: PageEntry = {
  path: "/contact",
  meta: {
    title: "Contact Rishee Technology Services Limited",
    description:
      "Get in touch for a consultation, quote, or IT security support. Enquiries answered within 24 hours on business days.",
    keywords: [
      "contact",
      "quote",
      "consultation",
      "get started",
      "support",
      "phone",
      "email",
    ],
    type: "page",
  },
  Component: ContactPage,
};
