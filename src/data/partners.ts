const BASE =
  'https://deimlsxwhatmnsnusazh.storage.supabase.co/storage/v1/object/public/media'

export interface Partner {
  name: string
  src: string
}

export const PARTNERS: Partner[] = [
  { name: 'Microsoft', src: `${BASE}/partner-microsoft-clear.png?2026-07-28T12%3A23%3A47.025Z` },
  { name: 'Google', src: `${BASE}/partner-google-clear.png?2026-07-28T12%3A23%3A48.801Z` },
  { name: 'AWS', src: `${BASE}/partner-aws-clear.png?2026-07-28T12%3A23%3A50.591Z` },
  { name: 'Dell', src: `${BASE}/partner-dell-clear.png?2026-07-28T12%3A23%3A52.175Z` },
  { name: 'HP', src: `${BASE}/partner-hp-clear.png?2026-07-28T12%3A23%3A53.718Z` },
  { name: 'Lenovo', src: `${BASE}/partner-lenovo-clear.png?2026-07-28T12%3A23%3A55.313Z` },
  { name: 'Datto', src: `${BASE}/partner-datto-clear.png?2026-07-28T12%3A23%3A57.962Z` },
  { name: 'pfSense', src: `${BASE}/partner-pfsense-clear.png?2026-07-28T12%3A24%3A00.072Z` },
  { name: 'VMware', src: `${BASE}/partner-vmware-clear.png?2026-07-28T12%3A24%3A01.505Z` },
  { name: 'Ubiquiti', src: `${BASE}/partner-ubiquiti-clear.png?2026-07-28T12%3A24%3A03.164Z` },
  { name: 'Sherweb', src: `${BASE}/Partner-Logos-Sherweb-.png?2026-07-28T03%3A55%3A41.955Z` },
  { name: 'Dropbox', src: `${BASE}/partner-dropbox-clear.png?2026-07-28T12%3A24%3A05.845Z` },
]
