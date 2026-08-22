export interface NavChild {
  label: string
  href: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavChild[]
  intro?: string
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', href: '/about' },
  {
    label: 'Cyber Security',
    href: '/cyber-security',
    intro: 'Protection for your data, your systems, and your people',
    children: [
      { label: 'Cyber Security Audits', href: '/cyber-security-audits' },
      { label: 'Security Operations Centre', href: '/security-operations-centre-soc' },
      { label: 'Managed Firewall', href: '/managed-firewall' },
      { label: 'Detection & Response', href: '/managed-detection-response' },
      { label: 'Managed Antivirus', href: '/managed-antivirus' },
      { label: 'Email Phishing Security', href: '/email-phishing-security' },
      { label: 'Security Awareness Training', href: '/security-awareness-testing-training' },
      { label: 'Dark Web Monitoring', href: '/dark-web-monitoring' },
    ],
  },
  { label: 'AI Security', href: '/shadow-ai-ai-governance-services' },
  {
    label: 'Cloud',
    href: '/cloud-infrastructure-services',
    intro: 'Build, Secure and Protect Your Business Cloud Infrastructure',
    children: [
      { label: 'Cloud Consulting', href: '/cloud-services-consulting' },
      { label: 'Cloud Migration Services', href: '/cloud-migration-services' },
      { label: 'Microsoft 365 Services', href: '/microsoft-365-services' },
      { label: 'Google Workspace Services', href: '/google-workspace-services' },
      { label: 'Infrastructure as a Service', href: '/infrastructure-as-a-service' },
      { label: 'Colocation', href: '/colocation' },
    ],
  },
  {
    label: 'Managed IT',
    href: '/it-managed-services',
    intro: 'Managed IT Services that empower your organization to thrive in the digital age',
    children: [
      { label: 'Fully Managed IT Services', href: '/fully-managed-it-services' },
      { label: 'Co-Managed IT Services', href: '/co-managed-it-services' },
      { label: 'Disaster Recovery Systems', href: '/disaster-recovery-and-business-continuity' },
      { label: 'IT Service Desk Support', href: '/it-service-desk-support' },
      { label: 'Monitoring & Maintenance', href: '/monitoring-maintenance' },
      { label: 'Asset Management', href: '/asset-management' },
      { label: 'Google Workspace Backup', href: '/google-workspace-backup' },
      { label: 'Microsoft 365 Backup', href: '/microsoft-365-backup' },
      { label: 'Windows Device Backup', href: '/windows-device-backup' },
    ],
  },
  {
    label: 'Projects',
    href: '/projects-procurement',
    intro: 'Ark Cyber is your one stop shop for projects, services & hardware/software',
    children: [
      { label: 'Hardware Procurement', href: '/hardware-procurement' },
      { label: 'Consulting & Planning', href: '/consulting-planning' },
      { label: 'IT Implementation Projects', href: '/it-implementation-projects' },
      { label: 'Cabling & Network Infrastructure', href: '/cabling-infrastructure' },
    ],
  },
]

export const FOOTER_COMPANY_LINKS = [
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Get a Quote', href: '/contact' },
]

export const FOOTER_SERVICE_LINKS = [
  { label: 'Cyber Security', href: '/cyber-security' },
  { label: 'AI Security', href: '/shadow-ai-ai-governance-services' },
  { label: 'Cloud', href: '/cloud-infrastructure-services' },
  { label: 'Managed IT', href: '/it-managed-services' },
  { label: 'Projects', href: '/projects-procurement' },
]
